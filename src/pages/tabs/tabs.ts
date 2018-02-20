import { Component } from '@angular/core';

import { InvitationsPage } from '../invitations/invitations';
import { PosterPage } from '../poster/poster';
import { MessagesPage } from '../messages/messages';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = MessagesPage;
  tab3Root = PosterPage;
  tab4Root = InvitationsPage;

  constructor() {

  }
 
}
