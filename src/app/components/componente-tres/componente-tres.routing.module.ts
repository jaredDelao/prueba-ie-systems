import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteTresComponent } from './componente-tres.component';

const routes: Routes = [
    {path:'', component: ComponenteTresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponenteTresRoutingModule { }
