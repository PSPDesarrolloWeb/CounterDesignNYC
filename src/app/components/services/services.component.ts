import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  cardsData = [
    { imageUrl: 'assets/img/top/counter.jpg', title: 'Counters' },
    { imageUrl: 'assets/img/top/kitchen.jpg', title: 'Fireplaces' },
    { imageUrl: 'assets/img/horizontal/bat4.jpg', title: 'Batrooms' },
    { imageUrl: 'assets/img/top/profinstall.jpg', title: 'Professional Installation' },
  ];

}
