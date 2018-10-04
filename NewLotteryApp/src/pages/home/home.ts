import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message = 'message';
  subject = 'subject message';
  file = null;
  link = 'www.google.com';
  data;
  constructor(private socialSharing: SocialSharing) {
    this.data = {
      labels: ['people','tickets'],
      datasets: [
          {
              data: [50, 124],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  // "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  // "#FFCE56"
              ]
          }]    
      };
   }

  sharing() {
    this.socialSharing.share(this.message, this.subject, this.file, this.link).then(() => {
    }).catch((e) => {
      alert(e);
    })
  }

}
