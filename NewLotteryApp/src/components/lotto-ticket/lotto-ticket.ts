import { Component, Input } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

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
  constructor(private fb: Facebook) {
  
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
    this.fb.login(['public_profile'])
    .then( (res: FacebookLoginResponse) => {

        // The connection was successful
        if(res.status == "connected") {
          alert('connected!');
            // Get user ID and Token
            var fb_id = res.authResponse.userID;
            var fb_token = res.authResponse.accessToken;

            // Get user infos from the API
            this.fb.api("/me?fields=name", []).then((user) => {

                // Get the connected user details
                // var gender    = user.gender;
                // var birthday  = user.birthday;
                var name      = user.name;
                alert('welcome ' + name);
                // var email     = user.email;

                // console.log("=== USER INFOS ===");
                // console.log("Gender : " + gender);
                // console.log("Birthday : " + birthday);
                // console.log("Name : " + name);
                // console.log("Email : " + email);

                // => Open user session and redirect to the next page

            });

        } 
        // An error occurred while loging-in
        else {
            alert("An error occurred...");
        }

    })
    .catch((e) => {
       alert('Error logging into Facebook');
    });
  }
}
