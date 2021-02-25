import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    spaceBetween: 30
  };

  constructor() { }

  ngOnInit() {
  }
}
