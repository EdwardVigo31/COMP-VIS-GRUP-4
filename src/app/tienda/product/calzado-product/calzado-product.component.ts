import { Component } from '@angular/core';

@Component({
  selector: 'app-calzado-product',
  templateUrl: './calzado-product.component.html',
  styleUrls: ['./calzado-product.component.css']
})
export class CalzadoProductComponent {
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

