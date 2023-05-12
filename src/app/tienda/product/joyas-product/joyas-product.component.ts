import { Component } from '@angular/core';

@Component({
  selector: 'app-joyas-product',
  templateUrl: './joyas-product.component.html',
  styleUrls: ['./joyas-product.component.css'],
  
})
export class JoyasProductComponent {
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
