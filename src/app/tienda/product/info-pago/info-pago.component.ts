import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormData } from 'src/app/models/form.model';

@Component({
  selector: 'app-info-pagos',
  templateUrl: './info-pago.component.html',
  styleUrls: ['./info-pago.component.css'],
  
})

export class InfoPagoComponent implements OnInit {
  
  form = document.querySelector('form')!;
  nameInput = document.querySelector('#name') as HTMLInputElement;
  phoneInput = document.querySelector('#phone') as HTMLInputElement;
  addressInput = document.querySelector('#address') as HTMLInputElement;
  dateInput = document.querySelector('#date') as HTMLInputElement;
  timeInput = document.querySelector('#time') as HTMLInputElement;
  submitBtn = document.querySelector('#submit') as HTMLButtonElement;
  
  constructor(){

  }
  
  ngOnInit(): void {
      
  }
  
  // Función para obtener los valores del formulario y guardarlos en un objeto
  getFormData(): FormData {
    const formData: FormData = {
      name: this.nameInput.value,
      phone: this.phoneInput.value,
      address: this.addressInput.value,
      date: this.dateInput.value,
      time: this.timeInput.value
    };
    return formData;
  }
  
  // Función para enviar los datos del formulario
  submitForm(event: Event) {
    event.preventDefault();
    const formData = this.getFormData();
    console.log(formData); // Aquí puedes hacer lo que quieras con los datos del formulario
  }
  
  // Agregamos el evento submit al formulario
  
  
}