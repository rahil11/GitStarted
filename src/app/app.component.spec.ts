import { TestBed, async } from '@angular/core/testing';
import {CommonServiceService} from '../services/common.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ], imports: [
        BrowserModule,
        FormsModule,
        HttpModule],
      providers : [CommonServiceService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  it('should call MockData and print console.log', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const comp = fixture.debugElement.componentInstance;
  spyOn(comp, 'onClick');
  const button = fixture.debugElement.nativeElement.querySelector('button');
  button.click();
  fixture.whenStable().then(() => {
    expect(comp.onClick).toHaveBeenCalled();
  });
  });

});
