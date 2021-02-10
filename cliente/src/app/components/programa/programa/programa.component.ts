import { Component, OnInit } from '@angular/core';
import { Programa } from '../../../models/programa.model';
import { ProgramaService } from '../../../services/programa.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Director } from '../../../models/director.model'
import { Locutor } from '../../../models/locutor.model'
import { DirectorService } from '../../../services/director.service';
import { LocutorService } from '../../../services/locutor.service';

declare var $: any;

@Component({
  selector: 'programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css'],
  providers: [ProgramaService, LocutorService, DirectorService],
})
export class ProgramaComponent implements OnInit {

  public programa: Programa;               //<- Utilizado para enviar la carga de un programa nuevo
  public modificarPrograma: Programa[];    //<- Guarda programa filtrado de lista para modificar
  public programas: Programa[];            //<- Cargado por getPeriodo();
  public confirmDelete: boolean;           //<- Confirma el borrado del elemento?
  public perBuscado: string;               //<- Buscar dni
  public directorprograma: Director[];
  public directorprog: Director;
  public directores: Director[];
  public locutorprograma: Locutor[];
  public locutorprog: Locutor;
  public locutores: Locutor[];
  public loading: boolean;

  constructor(
    private _programaService: ProgramaService,
    private _directorService: DirectorService,
    private _locutorService: LocutorService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.programa = new Programa('', '', new Date(), new Date(), new Date(), '', '');  //<- Usada para crear/modificar
    this.modificarPrograma = new Array();                                              //<- Guarda programa filtrado de lista para modificar
    this.programas = new Array();                                                      //<- Usada para cargar lista de periodoes
    this.confirmDelete = false;                                                        //<- Confirma el borrado del elemento?
    this.perBuscado;                                                                   //<- Buscar duracion
    this.directores = new Array();
    this.locutores = new Array();
    this.loading = true;
  }

  ngOnInit(): void {
    this.getProgramas();
    this.getLocutores();
    this.getDirectores();
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
  }
  
  getProgramas() {
    this._programaService.getProgramas().subscribe(
      response => {
        if (response.programas) {
          this.programas = response.programas;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
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

  getDirectores() {
    this._directorService.getDirectores().subscribe(
      response => {
        if (response.directores) {
          this.directores = response.directores;
          console.log(this.directores);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(form: any) {
    this._programaService.createPrograma(this.programa).subscribe(
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

  setConfirmDelete(programa: Programa) {
    let response = confirm("Eliminar de forma permanente este programa?\n\nTitulo: " + programa.tituloprograma);
    if (response) {
      this.deletePeriodo(parseInt(programa.id));
    }
  }

  deletePeriodo(id: number) {
    this._programaService.deletePrograma(id).subscribe(
      response => {
        if (response) {
          location.reload();
        }
      },
      error => {
        alert("No se pudo borrar Programa: " + <any>error);
      }
    );
  }

  updatePeriodo(programa: Programa) {
    this._programaService.updatePrograma(this.programa).subscribe(
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
    this.modificarPrograma = this.programas.filter(prog => prog.id == id);
    if (this.modificarPrograma) {
      $('#nuevo').hide();
      $('#modificar').show();
      $('#cancelar').show();
    }
    this.programa = this.modificarPrograma[0];
    console.log(this.programa);
  }

  LimpiarCampos() {
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
    $('#name').val('');
    $('#lastname').val('');
    $('#dni').val('');
  }

  BuscarPeriodo() {
    //   let BuscaPeriodo: Programa[];

    //   BuscaPeriodo = this.programas.filter(per => per.duracion == this.perBuscado);
    //   if(BuscaPeriodo[0].duracion != '')
    //     alert("Programa Encontrado, Duracion: " + BuscaPeriodo[0].duracion);
  }

  VerPersonal(programa: Programa){
    let idlocutor = programa.fklocutoresid;
    let iddirector = programa.fkdirectorid;

    this.directorprograma = this.directores.filter(dir => dir.id == iddirector);
    this.directorprog = this.directorprograma[0];

    this.locutorprograma = this.locutores.filter(loc => loc.id == idlocutor);
    this.locutorprog = this.locutorprograma[0];

    this.loading = false;
  }
}

