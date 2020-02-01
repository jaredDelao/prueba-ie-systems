import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-conversion-json",
  templateUrl: "./conversion-json.component.html",
  styleUrls: ["./conversion-json.component.scss"]
})
export class ConversionJsonComponent implements OnInit {
  // Ejemplos Array to Object
  public array: Array<Object> = [
    { value: 1, name: "CampoUno" },
    { value: 2, name: "CampoDos" },
    { value: 3, name: "CampoTres" },
    { value: 4, name: "CampoCuatro" },
    { value: 5, name: "CampoCinco" },
    { value: 6, name: "CampoSeis" }
  ];

  public array1 = [
    { value: 21, name: "a" },
    { value: 20, name: "b" },
    { value: 19, name: "c" },
    { value: 18, name: "d" },
    { value: 17, name: "e" },
    { value: 16, name: "f" }
  ];

  // Ejemplos Object to Array
  public object = { a: 21, b: 20, c: 19, d: 18, e: 17, f: 16 };
  public object1 = { g: 1, l: 0, k: 144, p: 569, t: 20, q: 69 };

  resultadoJson: any;
  resultadoArray: any;

  constructor() {}

  ngOnInit() {
    // Opciones por parámetro: this.array ó this.array1
    this.convertirJson(this.array);
    // Opciones por parámetro: this.object ó this.object1
    this.convertirArray(this.object);
  }

  // Convertir de Array a Json
  convertirJson(arr) {
    let res = arr.reduce((acc: any, val: any) => {
      const { value, name } = val;
      Object.assign(acc, { [name]: value });
      return acc;
    }, {});
    // Resultado
    this.resultadoJson = res;
  }


  // Convertir de Json a Array
  accumulador: Array<Object> = [];
  convertirArray(objeto) {
    for (let key in objeto) {
      let objetoFinal = Object.assign({}, { [key]: objeto[key] });
      this.accumulador.push(objetoFinal);
    }

    let res = this.accumulador.reduce((acc: any, val: any) => {
      let key = Object.keys(val)[0];
      let value = val[key];
      acc.push({ value: value, name: key });
      return acc;
    }, []);
    // Resultado
    this.resultadoArray = res;
  }
}
