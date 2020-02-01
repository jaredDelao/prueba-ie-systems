import { NgModule } from "@angular/core";

import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule
} from "@angular/material";

@NgModule({
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
