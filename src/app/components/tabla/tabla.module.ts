import { NgModule } from '@angular/core';
import { TablaRoutingModule } from './tabla.routing.module';
import { TablaComponent } from './tabla.component';
import { MaterialModule } from '../../material.module';
import { InsumosService } from '../../services/insumos.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TablaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [TablaComponent],
  providers: [InsumosService]
})
export class TablaModule { }