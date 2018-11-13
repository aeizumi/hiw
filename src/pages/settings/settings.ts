import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {ChangeDetectorRef} from '@angular/core';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  // dummy data for users
  user = {
    first_name: 'Nuchjanee',
    last_name: 'I.',
    email: 'aet@example.com',
    country_code: 66,
    phone: '123456789'
  };

  constructor(public nav: NavController, public cdRef: ChangeDetectorRef) {

  }

  change(value, limit){
    //manually launch change detection
    this.cdRef.detectChanges();
    this.phone = value.length > limit ? value.substring(0,limit) : value;
  }
}
