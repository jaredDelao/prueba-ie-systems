import { NgModule } from '@angular/core';
import { ConversionJsonRoutingModule } from './conversion-json.routing.module';
import { ConversionJsonComponent } from './conversion-json.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ConversionJsonRoutingModule,
  ],
  declarations: [ConversionJsonComponent]
})
export class ConversionJsonModule { }