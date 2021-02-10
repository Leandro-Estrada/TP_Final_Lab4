import { Component, OnInit } from '@angular/core';
import { Locutor } from '../../models/locutor.model';
import { LocutorService } from '../../services/locutor.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: any;

@Component({
  selector: 'locutor',
  templateUrl: './locutor.component.html',
  styleUrls: ['./locutor.component.css'],
  providers: [LocutorService]
})
export class LocutorComponent implements OnInit {
  public locutor: Locutor;              //<- Utilizado para enviar la carga de un locutores nuevo
  public modificarLocutor: Locutor[];   //<- Guarda locutores filtrado de lista para modificar
  public locutores: Locutor[];          //<- Cargado por getLocutor();
  public confirmDelete: boolean;          //<- Confirma el borrado del elemento?
  public dniBuscado: string;              //<- Buscar dni


  constructor(
    private _locutorService: LocutorService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.locutor = new Locutor('', '', '', ''); //<- Usada para crear/modificar
    this.modificarLocutor = new Array();         //<- Guarda locutor filtrado de lista para modificar
    this.locutores = new Array();                //<- Usada para cargar lista de locutores
    this.confirmDelete = false;                   //<- Confirma el borrado del elemento?
    this.dniBuscado;                              //<- Buscar dni
  }

  ngOnInit(): void {
    this.getLocutores();
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
  }

  getLocutores() {
    this._locutorService.getLocutores().subscribe(
      response => {
        if (response.locutores) {
          this.locutores = response.locutores;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(form:any) {
    this._locutorService.createLocutor(this.locutor).subscribe(
      response => {
        if (response) {
          location.reload();
        }
      },
      error => {
        alert("No se pudo crear Locutor: " + <any>error);
      }
    );
  }

  setConfirmDelete(locutor: Locutor) {
    let response = confirm("Eliminar de forma permanente este locutor?\n\nNombre: " + locutor.nombre + "\nApellido: " + locutor.apellido + "\nDNI: " + locutor.dni);
    if(response){
      this.deleteLocutor(parseInt(locutor.id));
    }
  }  

  deleteLocutor(id:number) {
    this._locutorService.deleteLocutor(id).subscribe(
      response => {
        if (response) {
          location.reload();
        }
      },
      error => {
        alert("No se pudo borrar Locutor: " + <any>error);
      }
    );
  }

  updateLocutor(locutor: Locutor) {
    this._locutorService.updateLocutor(this.locutor).subscribe(
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
    this.modificarLocutor = this.locutores.filter(dir => dir.id == id);
    if (this.modificarLocutor) {
        $('#nuevo').hide();
        $('#modificar').show();
        $('#cancelar').show();
    }
    this.locutor = this.modificarLocutor[0];
  }

  LimpiarCampos(){
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
    $('#name').val('');
    $('#lastname').val('');
    $('#dni').val('');
  }

  BuscarLocutor(){
    let BuscaLocutor: Locutor[];
    
    BuscaLocutor = this.locutores.filter(dir => dir.dni == this.dniBuscado);
    if(BuscaLocutor[0].dni != '')
      alert("Locutor Encontrado, DNI: " + BuscaLocutor[0].dni);
  }
}
