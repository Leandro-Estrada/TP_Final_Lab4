import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programa } from '../models/programa.model';
import { Global } from './global';

@Injectable()

export class ProgramaService {

  public url: string;
  public programasPorLoc: Programa[];
  public programas: Programa[];

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
    this.programasPorLoc = [];
    this.programas = new Array();
  }

  testService() {
    return 'Probando Servicio de angular';
  }

  getProgramas(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'programas/', { headers: headers });
  }

  getOnePrograma() { }

  createPrograma(programa: Programa): Observable<any> {
    let params = JSON.stringify(programa);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'programas/', params, { headers: headers });
  }

  updatePrograma(programa: Programa): Observable<any> {
    let periodo2 = new Programa('', programa.tituloprograma, programa.dia, programa.horarioemision, programa.duracion, programa.fkdirectorid, programa.fklocutoresid);

    let params = JSON.stringify(periodo2);
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url + 'programas/' + programa.id, params, { headers: headers });
  }

  deletePrograma(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.delete(this.url + 'programas/' + id, { headers: headers });
  }
}
