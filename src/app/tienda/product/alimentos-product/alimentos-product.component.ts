import { Component } from '@angular/core';

@Component({
  selector: 'app-alimentos-product',
  templateUrl: './alimentos-product.component.html',
  styleUrls: ['./alimentos-product.component.css']
})
export class AlimentosProductComponent {
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
