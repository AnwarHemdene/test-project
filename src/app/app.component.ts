import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MessagesPage } from '../pages/messages/messages';
import { InvitationsPage } from '../pages/invitations/invitations';
import { PosterPage } from '../pages/poster/poster';
import { ParamsPage } from '../pages/params/params';
import { InscrirePage } from '../pages/inscrire/inscrire';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';


// var config = {
//   apiKey: "AIzaSyA0nurCWrrVte-Ii6xZIs2ZCQ0mvJMcM7Y",
//   authDomain: "chatapp-7904c.firebaseapp.com",
//   databaseURL: "https://chatapp-7904c.firebaseio.com",
//   projectId: "chatapp-7904c",
//   storageBucket: "chatapp-7904c.appspot.com",
//   messagingSenderId: "969720234977"
// };

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    // firebase.initializeApp(config);
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Paramètres', component: ParamsPage },
      { title: 'Se Connecter', component: LoginPage },
      { title: 'Messages', component: MessagesPage },
      { title: 'Poster', component: PosterPage }
      ,{ title: 'Invitations', component: InvitationsPage },
      { title: 'Inscrire', component: InscrirePage },
      { title: 'Profile', component: ProfilePage }
      
    ];

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
