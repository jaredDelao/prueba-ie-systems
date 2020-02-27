import { NgModule } from '@angular/core';
import { ComponenteTresComponent } from './componente-tres.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { ComponenteTresRoutingModule } from './componente-tres.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComponenteTresRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [ComponenteTresComponent]
})
export class ComponenteTresModule { }