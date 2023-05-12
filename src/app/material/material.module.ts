import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from "@angular/material/toolbar"
import { MatCard, MatCardModule } from "@angular/material/card"
import { MatGridList } from "@angular/material/grid-list"


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class MaterialModule { }
