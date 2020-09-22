import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { countries } from '../../core/country.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  countryNum = "+1";
  phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  countries = countries;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  countryChange() {
    console.log('country code: ', this.countryNum);
  }

  next() {
    this.navCtrl.navigateForward("/verify");
  }
}
