import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContextProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContextProvider {
  SERVER_URL = '0.0.0.0';
  SERVER_PORT = '1111';
  ConnectionStatusPath = '1111';

  constructor(public http: HttpClient) {
    
  }

  async testConnection(){
    this.http.get(this.SERVER_URL + '/' + this.SERVER_PORT + '/' + this.ConnectionStatusPath).subscribe(()=> {
      return true;
    },(error)=> {
      console.log(error);
      return false;
    });
  }

}
