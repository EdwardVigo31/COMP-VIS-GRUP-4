import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  onCardClick(cardTitle: string) {
    console.log('Clicked on card with title:', cardTitle);
};

}
