import { Injectable } from '@angular/core';
import { Toast } from '@ionic-native/toast';
import { Network } from '@ionic-native/network';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  userName:string;

  constructor(
    private toast: Toast,
    private network: Network
  ) {
    console.log('Hello GlobalProvider Provider');
  }

  showToast(message){
    this.toast.show(message, '5000', 'top').subscribe();
  }

  callConnectSubscription() {
    let connectSubscription = this.network.onConnect().subscribe(() => {
      alert('Network connected');
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          alert('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });
    //connectSubscription.unsubscribe();
  }

  

  callDisconnectSubscription() {
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      alert('Network disconnected');
    });
    //disconnectSubscription.unsubscribe();
  }


  

}
