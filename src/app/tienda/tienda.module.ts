import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModaProductComponent } from './product/moda-product/moda-product.component';
import { JoyasProductComponent } from './product/joyas-product/joyas-product.component';
import { CalzadoProductComponent } from './product/calzado-product/calzado-product.component';
import { SaludProductComponent } from './product/salud-product/salud-product.component';
import { DescartablesProductComponent } from './product/descartables-product/descartables-product.component';
import { AlimentosProductComponent } from './product/alimentos-product/alimentos-product.component';
import { RouterModule, Routes } from '@angular/router';
import { TiendaRoutingModule } from './tienda.rounting.module';
import { MaterialModule } from '../material/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PagoComponent } from "./carro/pago/pago.component";
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CarComponent } from './carro/car/car.component';


@NgModule({
  declarations: [
    ModaProductComponent,
    JoyasProductComponent,
    CalzadoProductComponent,
    SaludProductComponent,
    DescartablesProductComponent,
    AlimentosProductComponent,
    PagoComponent,
    CarComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    MaterialModule,
    SlickCarouselModule,
    
  ]
})
export class TiendaModule { }
