import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  product=
    {
    nombre:"Combo frutal",
    precio:"S/. 25.00"
  }

  constructor(){

  }
  ngOnInit(): void {
    
  }
}
