import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  cardsData = [
    { imageUrl: 'assets/img/places/image3.jpeg', title: 'Counters' },
    { imageUrl: 'assets/img/kitchen/image1.jpeg', title: 'Fireplaces' },
    { imageUrl: 'assets/img/bathroom/image1.jpeg', title: 'Batrooms' },
    { imageUrl: 'assets/img/places/image1.jpeg', title: 'Professional Installation' },
  ];

}
