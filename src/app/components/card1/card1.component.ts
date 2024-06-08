import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.css'
})
export class Card1Component {
  titleHeader = 'Counter & Design NYC';
  titleSecond = '100% Satisfaction Guarantee';
  longText = `Counter & Design Marble and Granite is a family owned 
  business providing design and fabrication of stone products for residential 
  and commercial properties. Founded in 2013 our mission is to offer the 
  greatest selection of materials at the lowest prices available with 
  the highest quality installation. We offer a wide range of stone-related 
  products from around the world, including granite marble, onyx, travertine, 
  quartz and more. Whether you need a kitchen countertop, a bathroom vanity, 
  a fireplace surrounding or anything else imaginable.`;
  longTextSecond = `We install countertops for home and office kitchens, bathrooms,
  bar and outdoor entertainment areas. We have a full commercial
  division that installs stone in apartment buildings, condos, |
  stadiums, offices, buildings and yachts. We pride ourselves on
  offering the greatest selection and highest quality materials at
  the lowest installed price.`;
  imageFolders = ['assets/img/bathroom/', 'assets/img/places/', 'assets/img/kitchen/'];
  images: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Obtener imágenes aleatorias
    this.getRandomImages(5);
  }

  getRandomImages(count: number): void {
    for (let i = 0; i < count; i++) {
      // Obtener una carpeta aleatoria
      const folder = this.imageFolders[Math.floor(Math.random() * this.imageFolders.length)];
      // Obtener una imagen aleatoria dentro de la carpeta
      const imageNumber = Math.floor(Math.random() * 10); // Suponiendo que hay 10 imágenes numeradas de 0 a 9
      const imageUrl = folder + `image${imageNumber}.jpeg`; // Suponiendo que el nombre de las imágenes es 'imageX.jpeg'
      // Crear una URL segura para la imagen
      const safeImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
      // Agregar la URL segura al arreglo de imágenes
      this.images.push(safeImageUrl);
    }
  }

}
