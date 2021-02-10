import { HttpHeaderResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Director } from '../../models/director.model';
import { DirectorService } from '../../services/director.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: any;

@Component({
  selector: 'director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css'],
  providers: [DirectorService]
})
export class DirectorComponent implements OnInit {
  public director: Director;              //<- Utilizado para enviar la carga de un director nuevo
  public modificarDirector: Director[];   //<- Guarda director filtrado de lista para modificar
  public directores: Director[];          //<- Cargado por getDirector();
  public confirmDelete: boolean;          //<- Confirma el borrado del elemento?
  public dniBuscado: string;              //<- Buscar dni

  constructor(
    private _directorService: DirectorService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.director = new Director('', '', '', ''); //<- Usada para crear/modificar
    this.modificarDirector = new Array();         //<- Guarda director filtrado de lista para modificar
    this.directores = new Array();                //<- Usada para cargar lista de directores
    this.confirmDelete = false;                   //<- Confirma el borrado del elemento?
    this.dniBuscado;                              //<- Buscar dni
  }

  ngOnInit(): void {
    this.getDirectores();
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
  }

  getDirectores() {
    this._directorService.getDirectores().subscribe(
      response => {
        if (response.directores) {
          this.directores = response.directores;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(form: any) {
    this._directorService.createDirector(this.director).subscribe(
      response => {
        if (response) {
          location.reload();
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  setConfirmDelete(director: Director) {
    let response = confirm("Eliminar de forma permanente este director?\n\nNombre: " + director.nombre + "\nApellido: " + director.apellido + "\nDNI: " + director.dni);
    if (response) {
      this.deleteDirector(parseInt(director.id));
    }
  }

  deleteDirector(id: number) {
    this._directorService.deleteDirector(id).subscribe(
      response => {
        if (response) {
          location.reload();
        }
      },
      error => {
        alert("No se pudo borrar Director: " + <any>error);
      }
    );
  }

  updateDirector(director: Director) {
    this._directorService.updateDirector(this.director).subscribe(
      response => {
        if (response) {
          location.reload();
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  modificaDato(id: string) {
    this.modificarDirector = this.directores.filter(dir => dir.id == id);
    if (this.modificarDirector) {
        $('#nuevo').hide();
        $('#modificar').show();
        $('#cancelar').show();
    }
    this.director = this.modificarDirector[0];
  }

  LimpiarCampos(){
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
    $('#name').val('');
    $('#lastname').val('');
    $('#dni').val('');
  }

  BuscarDirector(){
    let BuscaDirector: Director[];
    
    BuscaDirector = this.directores.filter(dir => dir.dni == this.dniBuscado);
    if(BuscaDirector[0].dni != '')
      alert("Director Encontrado, DNI: " + BuscaDirector[0].dni);
  }
}
