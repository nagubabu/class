import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../../pages/list/list';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';
import { Events } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  toastvar:any;
  myIP:any;

  constructor(public navCtrl: NavController, private globalProvider: GlobalProvider, private nativeStorage: NativeStorage, private storage: Storage, private apiProvider:ApiProvider, private events:Events, private toast: Toast) {

  }

  setUsername(){
    console.log(this.username);
    this.globalProvider.userName = this.username;
    //this.navCtrl.setRoot(ListPage);
    // this.nativeStorage.setItem('uname', this.username)
    //   .then(
    //     () => console.log('Stored item!'),
    //     error => console.error('Error storing item', error)
    //   );
    // 
    this.storage.set('uname', this.username).then((val) => {
      console.log('Your name is', val);
    });
  }

  getMyIP(){
    console.log("IP method");
    this.apiProvider.getIpAddress().subscribe(
      data => {
        this.myIP = data;

      }
    );
  }

  setUser(){
    this.events.publish('user:created', "PLLC");
  }

  showToast(message){
    this.toastvar = this.toast.show(message, '50000', 'bottom').subscribe();
    this.globalProvider.showToast(message);
  }
}
