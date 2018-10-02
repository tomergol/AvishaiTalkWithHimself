import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContextProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContextProvider {
  SERVER_URL = 'https://testdomain.com:7001/getCountries';
  SERVER_PORT = '1111';
  ConnectionStatusPath = '1111';

  constructor(public http: HttpClient) {
    
  }

  async testConnection(){
    this.http.get(this.SERVER_URL).subscribe(()=> {
      return true;
    },(error)=> {
      console.log(error);
      return false;
    });
  }

}
