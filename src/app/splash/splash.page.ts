import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(
    private splashScreen: SplashScreen,
    private viewCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.splashScreen.hide();
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 100);
    // }, 1500);
  }
}
