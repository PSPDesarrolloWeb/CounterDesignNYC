import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css']
})
export class Slider1Component implements OnInit {

  imageFolders = ['assets/img/bathroom/', 'assets/img/places/', 'assets/img/kitchen/'];
  images: SafeResourceUrl[] = [];
  title = 'COUNTER & DESIGN NYC';
  subtitle = 'LET US YOUR COUNTER TO DREAMS INTO REALITY';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Obtener imágenes aleatorias
    this.getRandomImages(5);
  }

  getRandomImages(count: number): void {
    for (let i = 0; i < count; i++) {
      const folder = this.imageFolders[Math.floor(Math.random() * this.imageFolders.length)];
      const imageNumber = Math.floor(Math.random() * 10);
      const imageUrl = folder + `image${imageNumber}.jpeg`;
      const safeImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
      this.images.push(safeImageUrl);
    }
  }
}
