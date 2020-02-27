import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/componente-tres',
    pathMatch: 'full'
  },
  {
    path: "tabla",
    loadChildren: './components/tabla/tabla.module#TablaModule'
  },
  {
    path: "conversion-json",
    loadChildren: './components/conversion-json/conversion-json.module#ConversionJsonModule'
  },
  {
    path: "componente-tres",
    loadChildren: './components/componente-tres/componente-tres.module#ComponenteTresModule'
  },
  {
    path: "**",
    redirectTo: '/tabla',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
