import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { TemaMusical } from '../models/temamusical.model';

@Injectable()

export class TemaMusicalService {
  public url: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  testService() {
    return 'Probando Servicio de angular';
  }

  getTemasMusicales(): Observable<any>{ 
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'temasmusicales/', { headers: headers });
  }

  getOneTemaMusical() { }

  createTemaMusical(temamusical: TemaMusical): Observable<any> {
    let params = JSON.stringify(temamusical);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'temasmusicales/', params, { headers: headers });
  }

  updateTemaMusical(temamusical: TemaMusical): Observable<any> { 
    let temamusical2 = new TemaMusical('', temamusical.titulo, temamusical.autor);

    let params = JSON.stringify(temamusical);
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'temasmusicales/' + temamusical.id, params,{headers: headers});
  }

  deleteTemaMusical(id:number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.delete(this.url+'temasmusicales/'+id, {headers: headers});
  }
 
}
