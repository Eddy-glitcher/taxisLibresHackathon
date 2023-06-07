import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sponsor-slider',
  templateUrl: './sponsor-slider.component.html',
  styleUrls: ['./sponsor-slider.component.scss']
})
export class SponsorSliderComponent {


// Carousel Assets
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  autoplay: true,
  autoplaySpeed:1500,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  dots: false,
  margin:25,
  navSpeed:2000,
  navText: ['' , ''],
  responsive: {
    0: {
      items: 1
    },
    240:{
      items: 1
    },
    300:{
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: false
}
// Carousel Assets

// Carousel Sponsors

sponsorList : any[] = [
  {
    icon  : '../assets/img/sponsors/avianca-sponsor.png',
    alt   : 'Patrocinador Avianca'
  },
  {
    icon  : '../assets/img/sponsors/bogota-sponsor.jpg',
    alt   : 'Patrocinador Bogotá'
  },
  {
    icon  : '../assets/img/sponsors/ecopetrol-sponsor.png',
    alt   : 'Patrocinador Ecopetrol'
  },
  {
    icon  : '../assets/img/sponsors/vanti-sponsor.png',
    alt   : 'Patrocinador Vanti'
  },

]

//

}
