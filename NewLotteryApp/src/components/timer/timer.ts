import { Component } from '@angular/core';

/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent {

  seconds: number;
  days: number;
  hours: number;
  minutes: number;
  text: string;

  secToHours(seconds: number) {
    this.days = Math.floor(seconds / (3600 * 24));
    seconds -= this.days * 3600 * 24;

    this.hours = Math.floor(seconds / 3600);
    seconds -= this.hours * 3600;

    this.minutes = Math.floor(seconds / 60);
    seconds -= this.minutes * 60;

    this.seconds = seconds;
  }
  updateTimer() {
    setTimeout(() => {
      if (this.seconds !== 0) {
        --this.seconds;
      } else if (this.minutes !== 0) {
        --this.minutes;
        this.seconds = 59;
      } else if (this.hours !== 0) {
        --this.hours;
        this.minutes = 59;
      } else if (this.days !== 0) {
        --this.days;
        this.hours = 23;
      } else {
        this.days = 1
      }
      this.updateTimer();
    }, 1000);
  }
  constructor() {
    this.seconds = 30000;
    this.secToHours(this.seconds);
    this.updateTimer();
    // $(document).ready(function () {
    //   $(".letter").lettering();
    // });

  }

}
