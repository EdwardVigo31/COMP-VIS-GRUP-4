import { Component } from '@angular/core';

@Component({
  selector: 'app-salud-product',
  templateUrl: './salud-product.component.html',
  styles: [
  ]
})

export class SaludProductComponent {
  title = 'Tienda';
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true
};
onCardClick(cardTitle: string) {
  console.log('Clicked on card with title:', cardTitle);
}


ngOnInit() {
  
}}
