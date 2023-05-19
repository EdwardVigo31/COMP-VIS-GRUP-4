import { Component, OnInit } from '@angular/core';
import { FormData } from 'src/app/models/form.model';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  nameInput:string="";
  phoneInput:string=""
  addressInput: string=""
  inputDate:Date=new Date
  inputHour:Date=new Date

  constructor(){

  }
  
  ngOnInit(): void {
      
  }
  
  // Función para obtener los valores del formulario y guardarlos en un objeto
  getFormData(): FormData {
    const newDate=new Date(this.inputDate)
    newDate.setHours(this.inputHour.getHours())
    newDate.setMinutes(this.inputHour.getMinutes())
    const formData: FormData = {
      name: this.nameInput,
      phone: this.phoneInput,
      address: this.addressInput,
      date: newDate
    };
    return formData;
  }
  
  // Función para enviar los datos del formulario
  submitForm() {
    const formData = this.getFormData();
    console.log(formData); // Aquí puedes hacer lo que quieras con los datos del formulario
  }
  
  // Agregamos el evento submit al formulario
  
  
}
