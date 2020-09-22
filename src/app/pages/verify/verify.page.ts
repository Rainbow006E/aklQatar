import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { countries } from '../../core/country.constant';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  config = {
    length: 4,
    allowNumbersOnly: true,
    inputStyles: {
      'border': 0,
      'border-bottom': '1px solid black',
      'border-radius': 0
    },
    disableAutoFocus: true
  };

  constructor(
    private navCtl: NavController
  ) { }

  ngOnInit() {
  }

  onOtpChange() {

  }

  next() {
    this.navCtl.navigateForward('/home');
  }
}
