import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cardInfo = [
    {
      image: "assets/imgs/home/card1.png",
      title: "خاروفي",
      desc1: "ختر نوع الخاروف وطريقة التقطيع المفضلة لديك",
      desc2: "واترك الباقي علينا"
    },
    {
      image: "assets/imgs/home/card2.png",
      title: "كشتة",
      desc1: "ماتشيل هم الكشتات، خطط طلعتك واترك الباقي علينا،",
      desc2: "نجيك وين ماكنت."
    },
    {
      image: "assets/imgs/home/card3.png",
      title: "ولائم",
      desc1: "اخترنا لك أفضل المطاعم الشعبية، اطلب خاروف واختر",
      desc2: "المطعم وخلي الباقي علينا"
    },
    {
      image: "assets/imgs/home/card4.png",
      title: "طبخ بيتنا",
      desc1: "مافي أطيب من طبخ البيت، ساهم معنا في دعم الأسر ",
      desc2: "المنتجة واطلب طبختك المفضلة"
    }
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  orderStatus() {
    this.navCtrl.navigateForward('/order-status');
  }
}
