  import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from '../services/common.service';
import {Response} from '@angular/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  mockData: string;

     constructor(private httpService: CommonServiceService) {

     }

    onClick(name: string) {
    this.httpService.getMockData()
            .subscribe((data: Response) => {
            this.mockData = data['msg'];
            console.log(this.mockData);
          },
          (error) => {
              console.log('error1' + error);
              this.mockData =  'error retrieving Data';
      });
  }
}
