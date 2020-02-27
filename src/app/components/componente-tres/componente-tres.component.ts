import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Form,
  FormArray,
  FormGroup,
  FormControl
} from "@angular/forms";
import { of } from "rxjs";

@Component({
  selector: "app-componente-tres",
  templateUrl: "./componente-tres.component.html",
  styleUrls: ["./componente-tres.component.scss"]
})
export class ComponenteTresComponent implements OnInit {
  form: FormGroup;

  // catalogo
  catalogo: any[] = [];

  response = [
    { param: 1, id: 1, desc: "ejemplo 1" },
    { param: 2, id: 2, desc: "ejemplo 2" },
    { param: 3, id: 3, desc: "ejemplo 3" },
    { param: 1, id: 4, desc: "ejemplo 4" },
    { param: 2, id: 5, desc: "ejemplo 5" },
    { param: 3, id: 6, desc: "ejemplo 6" },
    { param: 1, id: 7, desc: "ejemplo 7" }
  ];
  req$: any;

  constructor(private fb: FormBuilder) {
    this.req$ = of(this.response);
  }

  ngOnInit() {
    this.formInit();
    this.getResponse();
  }

  formInit() {
    this.form = this.fb.group({
      todo: this.fb.array([])
    });
  }

  todos() {
    return this.form.get("todo") as FormArray;
  }

  createGroup(item, bool) {
    return this.fb.group({
      check: new FormControl(bool),
      param: new FormControl(item.param),
      id: new FormControl(item.id),
      desc: new FormControl(item.desc),
      porcentaje: new FormControl()
    });
  }

  getResponse() {
    // Setea los valores dependiendo si son obligatorios o semi obligatorios
    for (let row of this.response) {
      if (row.param == 1) this.todos().push(this.createGroup(row, true));
      if (row.param == 2) this.todos().push(this.createGroup(row, true));
      if (row.param == 3) this.catalogo.push(row);
    }
    console.log(this.form.getRawValue());
  }

  verDatos(i) {
    console.log(i);
  }

  agregar() {
    let newRow = this.fb.group({
      check: new FormControl(false),
      param: new FormControl(),
      id: new FormControl(),
      desc: new FormControl(),
      porcentaje: new FormControl()
    });

    this.todos().push(newRow);
  }

  disabledSelectOptns(list) {
    for (let i = 0; i < this.response.length; i++) {
      if (this.response[i].id == list.id) {
        console.log(this.response[i].id);
        return true;
      }

    }
  }
}
