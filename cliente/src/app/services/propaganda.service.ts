import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Propaganda } from '../models/propaganda.model';

@Injectable()

export class PropagandaService {
  public url: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  testService() {
    return 'Probando Servicio de angular';
  }

  getPropagandas(): Observable<any>{ 
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'propagandas/', { headers: headers });
  }

  getOnePropagandaMusical() { }

  createPropaganda(propaganda: Propaganda): Observable<any> {
    let params = JSON.stringify(propaganda);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'propagandas/', params, { headers: headers });
  }

  updatePropaganda(propaganda: Propaganda): Observable<any> { 
    let propaganda2 = new Propaganda('', propaganda.cuit, propaganda.empresa);

    let params = JSON.stringify(propaganda);
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'propagandas/' + propaganda.id, params,{headers: headers});
  }

  deletePropaganda(id:number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.delete(this.url+'propagandas/'+id, {headers: headers});
  }
 
}
