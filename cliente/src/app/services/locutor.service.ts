import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locutor } from '../models/locutor.model'
import { Global } from './global';

@Injectable()

export class LocutorService {
  public url: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  testService() {
    return 'Probando Servicio de angular';
  }

  getLocutores(): Observable<any>{ 
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'locutores/', { headers: headers });
  }

  getOneLocutor(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'locutores/'+id, { headers: headers });
   }

  createLocutor(locutor: Locutor): Observable<any> {
    let params = JSON.stringify(locutor);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'locutores/', params, { headers: headers });
  }

  updateLocutor(locutor: Locutor): Observable<any> { 
    let locutor2 = new Locutor('', locutor.apellido, locutor.nombre, locutor.dni);

    let params = JSON.stringify(locutor);
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'locutores/' + locutor.id, params,{headers: headers});
  }

  deleteLocutor(id:number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.delete(this.url+'locutores/'+id, {headers: headers});
  }
 
}
