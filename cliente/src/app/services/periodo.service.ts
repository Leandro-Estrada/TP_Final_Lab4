import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Periodo } from '../models/periodo.model';
import { Global } from './global';

@Injectable()

export class PeriodoService {
  public url: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  testService() {
    return 'Probando Servicio de angular';
  }

  getPeriodos(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'periodos/', { headers: headers });
  }

  getOnePeriodo() { }

  createPeriodo(periodo: Periodo): Observable<any> {
    let params = JSON.stringify(periodo);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'periodos/', params, { headers: headers });
  }

  updatePeriodo(periodo: Periodo): Observable<any> { 
    let periodo2 = new Periodo('', periodo.duracion, periodo.fkprogramasid, periodo.fkpropagandasid, periodo.fktemasmusicalesid);

    let params = JSON.stringify(periodo2);
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'periodos/' + periodo.id, params,{headers: headers});
  }

  deletePeriodo(id:number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.delete(this.url+'periodos/'+id, {headers: headers});
  }
}
