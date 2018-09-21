import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello AdButtonComponent Component');
    this.text = 'Hello World';
  }

}
