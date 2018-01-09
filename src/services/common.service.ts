import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CommonServiceService {

  constructor(private http: Http) { }

  getMockData() {
   // It's a mock Service available at momockable.io
   return this.http.get('https://demo6912723.mockable.io/')
      .map((response: Response) => response.json());
  }
}
