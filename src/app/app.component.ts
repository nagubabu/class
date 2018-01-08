import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GlobalProvider } from '../providers/global/global';
import {CameraPage} from '../pages/camera/camera';
import { NotificationsPage} from '../pages/notifications/notifications';
import {MapsPage} from '../pages/maps/maps';
import { AppbrowserPage } from '../pages/appbrowser/appbrowser';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = NotificationsPage;
  user:string = "Guest";

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private events:Events,
    private global: GlobalProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

    this.events.subscribe('user:created', user => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.user = user;
    });

  }

  ngOnInit() {
    this.global.callDisconnectSubscription();
    this.global.callConnectSubscription();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}
