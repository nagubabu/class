import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from './../../providers/global/global';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  name:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private globalProvider: GlobalProvider, private storage: Storage) {

    console.log(this.navParams.get("name"));
    //this.name = this.navParams.get("name");
    //this.name = this.globalProvider.userName;
    this.name = this.storage.get("uname");
    // this.storage.get('uname').then((val) => {
    //   //console.log('Your age is', val);
    //   this.name = val;
    // });
  }
}
