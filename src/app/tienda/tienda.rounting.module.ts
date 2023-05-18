import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModaProductComponent } from './product/moda-product/moda-product.component';
import { CalzadoProductComponent } from './product/calzado-product/calzado-product.component';
import { AlimentosProductComponent } from './product/alimentos-product/alimentos-product.component';
import { SaludProductComponent } from './product/salud-product/salud-product.component';
import { JoyasProductComponent } from './product/joyas-product/joyas-product.component';
import { DescartablesProductComponent } from './product/descartables-product/descartables-product.component';
import { InfoPagoComponent } from './product/info-pago/info-pago.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }