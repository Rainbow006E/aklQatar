import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  timeline = [
    {
      title: "يتم الآن تأكيد الطلب"
    },
    {
      title: "تم استلام الطلب"
    },
    {
      title: "خروج الخروف من المزرعة"
    },
    {
      title: "وصل الخروف إلى المقصب"
    },
    {
      title: "الطلب متجه إلى المطعم"
    },
    {
      title: "تم استلام الطلب من المطعم"
    },
    {
      title: "الطلب في طريقه إليكم"
    },
    {
      title: "تم تسليم الطلب"
    }
  ];

  currentIndex = 0;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  contact() {
    if (this.currentIndex < this.timeline.length - 1) {
      this.currentIndex++;
    }
  }

  back() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.navCtrl.back();
    }
  }
}
