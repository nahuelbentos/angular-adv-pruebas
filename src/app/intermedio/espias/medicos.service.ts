import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable()
export class MedicosService {
  constructor(public http: HttpClient) {}

  // tslint:disable-next-line: typedef
  getMedicos() {
    return this.http.get('...').pipe(map((resp) => resp['medicos']));
  }

  // tslint:disable-next-line: typedef
  agregarMedico(medico: any) {
    return this.http.post('...', medico).pipe(map((resp) => resp['medico']));
  }

  // tslint:disable-next-line: typedef
  borrarMedico(id: string) {
    return this.http.delete('...').pipe(map((resp) => resp['medico']));
  }
}
