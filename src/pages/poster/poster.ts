import { Component} from '@angular/core';
import { NavController , AlertController } from 'ionic-angular';
@Component({
  selector: 'poster-about',
  templateUrl: 'poster.html'
})
export class PosterPage {
  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {}


presentPrompt() {
  let alert = this.alertCtrl.create({
    title: 'Annonce',
    inputs: [
      {
        name: "Titre d'annonce",
        placeholder: 'Titre'
      },
      {
        name: "Description d'annonce",
        placeholder: 'Description',
        type: 'text'
      }
    ],
    buttons: [
      {
        text: 'Upload Image',
        role: 'send',
        handler: data => {
          console.log('image uploaded');
        }
      },{
        text: 'Position',
        role: 'send',
        handler: data => {
          console.log('position chosed');
        }
      },
      {
        text: 'Publish',
        handler: data => {
          console.log('announce published');
        }
      }
    ]
  });
  alert.present();
}




}
