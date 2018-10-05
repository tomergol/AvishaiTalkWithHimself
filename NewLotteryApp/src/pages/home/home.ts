import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
declare var Chart:any;
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
  doughnutChart: any;
  @ViewChild('doughnutCanvas') doughnutCanvas;

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
          labels: ["pepole", "tickets"],
          datasets: [{
              label: '# of Votes',
              data: [62,38],
              backgroundColor: [
                  '#FEF20E',
                  '#56A139',
              ],
              hoverBackgroundColor: [
                  "#E0DD4C",
                  "#b0bf7a",
              ]
          }]
      }

  });

  }
  constructor(private socialSharing: SocialSharing) {
  
   }

  sharing() {
    this.socialSharing.share(this.message, this.subject, this.file, this.link).then(() => {
    }).catch((e) => {
      alert(e);
    })
  }

}
