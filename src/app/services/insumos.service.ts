import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  constructor(private http: HttpClient) { }

  getInsumos(id: number) {
    return this.http.post('http://201.131.20.74:8080/workingmons-ws/insumos/consultaAll', {"usuario_id": id})
      .pipe(map((res: any) => res.resultados))
  }
}
