import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModaProductComponent } from './product/moda-product/moda-product.component';
import { CalzadoProductComponent } from './product/calzado-product/calzado-product.component';
import { AlimentosProductComponent } from './product/alimentos-product/alimentos-product.component';
import { SaludProductComponent } from './product/salud-product/salud-product.component';
import { JoyasProductComponent } from './product/joyas-product/joyas-product.component';
import { DescartablesProductComponent } from './product/descartables-product/descartables-product.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { PagoComponent } from "./carro/pago/pago.component"
import { CarComponent } from './carro/car/car.component';

const routes: Routes = [
  {
    path:'',
    component:ModaProductComponent,
    
  },
  {
    path:'calzado',
    component:CalzadoProductComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'car',
    component:CarComponent,
  },
{
  path:'alimentos',
  component:AlimentosProductComponent,
  },
{
  path:'joyas',
  component:JoyasProductComponent,
},
{
  path:'salud',
  component:SaludProductComponent,
},
{
  path:'descartables',
  component:DescartablesProductComponent,
},
{
  path:'pago',
  component:PagoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }