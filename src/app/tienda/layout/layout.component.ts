import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  ngOnInit(): void {}
  signOut() {
    console.log('Me fui');
  }

  onCardClick() {
    console.log('Clicked on card with title:');
};

}


