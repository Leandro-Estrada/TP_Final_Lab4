import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Director } from '../models/director.model'
import { Global } from './global';

@Injectable()

export class DirectorService {
  public url: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  testService() {
    return 'Probando Servicio de angular';
  }

  getDirectores(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'directores/', { headers: headers });
  }

  getOneDirectores() { }

  createDirector(director: Director): Observable<any> {
    let params = JSON.stringify(director);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'directores/', params, { headers: headers });
  }

  updateDirector(director: Director): Observable<any> { 
    let director2 = new Director('', director.apellido, director.nombre, director.dni);

    let params = JSON.stringify(director2);
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'directores/' + director.id, params,{headers: headers});
  }

  deleteDirector(id:number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.delete(this.url+'directores/'+id, {headers: headers});
  }
}
