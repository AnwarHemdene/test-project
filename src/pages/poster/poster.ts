import { Component} from '@angular/core';
import { NavController , AlertController } from 'ionic-angular';
@Component({
  selector: 'poster-about',
  templateUrl: 'poster.html'
})
export class PosterPage {
  constructor(public navCtrl: NavController , private alertCtrl: AlertController) {}
    presentConfirm(typeAnnonce) {
      // let type = typeAnnonce as String
      if (<string>typeAnnonce  == "type0" || <string>typeAnnonce  == "type1"){
        let alert = this.alertCtrl.create({
            title: 'Confirm ?',
            message: 'Reputation level required ?',
            buttons: [
              {
                text: 'Approver',
                role: 'ok',
                handler: () => {
                  console.log('Poste apprové');
                },
              },
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Poste annulé');
                },
              }]
            });
            
            alert.present();
      }
      console.log(typeAnnonce);
    // }
    }
  }