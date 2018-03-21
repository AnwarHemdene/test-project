import { Component } from '@angular/core';
import { NavController , FabContainer, FabButton, AlertController} from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash=true;

  username: string = '';
  tabBarElement : any;

  constructor(public navCtrl: NavController,
      private alertCtrl: AlertController) {
        this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad(){
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);}


  showAlert(title: string, message: string) {
    let alertBox = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alertBox.present();
  }

//   loginUser() {
//       if(/^[a-zA-Z0-9]+$/.test(this.username)) {
//           // all cool
//           this.navCtrl.push(ChatPage, {
//               username: this.username
//           });
//       } else {
//           this.showAlert('Error', 'Invalid Username');
//       }
//   }

}
