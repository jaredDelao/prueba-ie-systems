import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversionJsonComponent } from './conversion-json.component';

const routes: Routes = [
    {path:'', component: ConversionJsonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversionJsonRoutingModule { }
