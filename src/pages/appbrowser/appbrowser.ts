import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the AppbrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-appbrowser',
  templateUrl: 'appbrowser.html',
})
export class AppbrowserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _InAppBrowser:InAppBrowser) {
    
    //
//browser.insertCSS(...);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppbrowserPage');
  }
  btnclick(){
    let inAppBrowserRef = this._InAppBrowser.create('https://ionicframework.com/');
    inAppBrowserRef.executeScript({code:'document.cookie;'}).then(data=>{console.log(data)})


    
  
  }

 loadStartCallBack() {

    //$('#status-message').text("loading please wait ...");

}
}
