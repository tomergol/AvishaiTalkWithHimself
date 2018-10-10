import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
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
  lineChart:any;

  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('slides') slides;

  ngAfterViewInit() {
  }
  ionViewDidEnter(){
    this.slides.slideTo(1);
  }
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

  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
    type: 'line',
    data: {
        labels: ["January", "February", "March"],
        datasets: [
            {
                label: "my wins",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#56A139",
                borderColor: "#FEF20E",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
            }
        ]
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
