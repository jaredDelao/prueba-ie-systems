import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
