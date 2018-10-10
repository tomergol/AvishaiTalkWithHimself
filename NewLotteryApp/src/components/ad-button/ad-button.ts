import { Component } from '@angular/core';
import { AlertController, AlertButton } from 'ionic-angular';
import { ActionListComponent } from '../action-list/action-list';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the AdButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ad-button',
  templateUrl: 'ad-button.html'
})
export class AdButtonComponent {

  text: string;
  message = 'message';
  subject = 'subject message';
  file = null;
  link = 'www.google.com';

  constructor(private _alertCtr: AlertController, private socialSharing: SocialSharing) {

  }

  alertFunc(value){
    alert(value);
  }

  sharing() {
    this.socialSharing.share(this.message, this.subject, this.file, this.link).then(() => {
    }).catch((e) => {
      alert(e);
    })
  }

  adPopUp() {
    let alert = this._alertCtr.create({
      title:'choose an action',
      buttons:[{
        text: 'watch AD',
        handler: () => {
          this.alertFunc('Ad');
        },
        cssClass:'adB'
      },
      {
        text: 'share with friends',
        handler: () => {
          this.sharing()
        }
      },
      {
        text: 'take a survey',
        handler: () => {
          this.alertFunc('survey');
        }
      }
    ],
    cssClass: 'alertCustomCss'
    });
    alert.present();
  }

}
