import { Component } from '@angular/core';

@Component({
  selector: 'app-descartables-product',
  templateUrl: './descartables-product.component.html',
  styleUrls: ['./descartables-product.component.css']
})
export class DescartablesProductComponent {
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
