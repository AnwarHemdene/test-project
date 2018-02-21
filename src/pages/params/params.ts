import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams , ItemSliding ,Platform, Nav , FabContainer, ActionSheetController} from 'ionic-angular';
// import { MyApp } from '../app/app.component';
import { HomePage } from '../home/home';
/**
 * Generated class for the ParamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-params',
  templateUrl: 'params.html',
})


export class ParamsPage {


  
  constructor(public navCtrl: NavController, public navParams: NavParams
  ) { }

}
