import { Component, OnInit } from "@angular/core";
import { InsumosService } from "../../services/insumos.service";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: "app-tabla",
  templateUrl: "./tabla.component.html",
  styleUrls: ["./tabla.component.scss"]
})
export class TablaComponent implements OnInit {
  displayedColumns: string[] = ['insumo_id', 'nombre', 'unidad', 'contenido', 'costo'];
  form: FormGroup;
  dataSource: any;

  constructor(public _insumosService: InsumosService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formInit();
  }
  
  getTabla() {
    let id = this.form.get('tipousuario').value;
    this._insumosService.getInsumos(id).subscribe(insumos => {
      if (insumos == [] || insumos.length <= 0) {
        alert(`No hay datos con id: ${id}`);
      }
      this.dataSource = new MatTableDataSource(insumos);
    });

  }

  formInit() {
    this.form = this.fb.group({
      tipousuario: new FormControl('', [Validators.required, Validators.pattern('.*[0-9]')])
    })
  }
}
