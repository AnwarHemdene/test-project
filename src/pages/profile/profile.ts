import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  items: any;
  content: string = "content";
  constructor(public navCtrl: NavController, public navParams: NavParams, private afdatabase: AngularFireDatabase) {
    this.afdatabase.list<any>('content-list').valueChanges().subscribe(data=> { this.items = data});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
