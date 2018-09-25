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

  constructor(private socialSharing: SocialSharing) { }

  sharing() {
    this.socialSharing.share(this.message, this.subject, this.file, this.link).then(() => {
    }).catch((e) => {
      alert(e);
    })
  }

}
