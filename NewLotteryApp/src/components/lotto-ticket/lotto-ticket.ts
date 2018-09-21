import { Component, Input } from '@angular/core';

/**
 * Generated class for the LottoTicketComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lotto-ticket',
  templateUrl: 'lotto-ticket.html'
})
export class LottoTicketComponent {

  @Input() id;
  text: string;
  picId;
  unicId;
  imgUrl = "dollar2";
  constructor() {
  
  }
  ngOnInit(){
      
    // this.picId = Math.floor(Math.random() * Math.floor(2));
    switch (this.id) {
      case 'therd':
        this.picId = 1;
        break;
    
      default:
      this.picId = 0;
        break;
    }
    this.unicId = Math.floor(Math.random() * Math.floor(2000000));
    if(this.id == 'therd'){
      this.imgUrl = "dollar3"
    }
  }

  logWithFaceBook(){
    alert('please log with facebook!')
  }
}
