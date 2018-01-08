import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getIpAddress() {
    var options = new RequestOptions({
      headers: new Headers({
        'Accept': 'application/json',
      })
    });
    
    return this.http.get("http://jsonip.com", options)
        .map(data => {
            data.json();
            // the console.log(...) line prevents your code from working 
            // either remove it or add the line below (return ...)
            console.log("I CAN SEE DATA HERE: ", data.json());
            return data.json();
    });
   
  }

}
