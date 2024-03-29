import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

 import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MessagesPage } from '../pages/messages/messages';
import { InvitationsPage } from '../pages/invitations/invitations';
import { PosterPage } from '../pages/poster/poster';
import { ParamsPage } from '../pages/params/params';
import { InscrirePage } from '../pages/inscrire/inscrire';
import { ProfilePage } from '../pages/profile/profile';
// import { ChatPage } from '../pages/chat/chat';
import { TabsPage } from '../pages/tabs/tabs';

import { ContentListPage } from '../pages/private-content-pages/content-list/content-list';
import { AddContentPage } from '../pages/private-content-pages/add-content/add-content';
import { EditContentItemPage } from '../pages/private-content-pages/edit-content-item/edit-content-item';
import{AnnonceA0Page} from '../pages/annonce-a0/annonce-a0';




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
      { title: 'Poster', component: AnnonceA0Page }
      ,{ title: 'Invitations', component: InvitationsPage },
      { title: 'Inscrire', component: InscrirePage },
      { title: 'Profile', component: ProfilePage },
      // { title: 'ChatRoom', component: ChatPage },
      { title: 'Private Content', component: ContentListPage }

      
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
