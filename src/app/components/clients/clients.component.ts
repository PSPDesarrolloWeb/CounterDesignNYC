import { Component, AfterViewInit } from '@angular/core';
import SwiperCore from 'swiper';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  public swiperOptions = {
    scrollbar: {
      hide: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 30,
  };

  cards = [
    {
      image: 'assets/profile/man1.jpg',
      title: 'Card Title 1',
      text: 'This is a long text for card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.'
    },
    {
      image: 'assets/profile/woman1.jpg',
      title: 'Card Title 2',
      text: 'This is a long text for card 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.'
    },
    {
      image: 'assets/profile/woman2.jpg',
      title: 'Card Title 3',
      text: 'This is a long text for card 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.'
    },
    {
      image: 'assets/profile/man2.jpg',
      title: 'Card Title 4',
      text: 'This is a long text for card 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.'
    }
  ];


  constructor() { }

  

  
}
