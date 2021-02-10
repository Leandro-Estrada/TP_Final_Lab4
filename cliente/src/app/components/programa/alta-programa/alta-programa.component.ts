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
  selector: 'alta-programa',
  templateUrl: './alta-programa.component.html',
  styleUrls: ['./alta-programa.component.css'],
  providers: [ProgramaService, LocutorService, DirectorService],
})
export class AltaProgramaComponent implements OnInit {

  public programa: Programa;               //<- Utilizado para enviar la carga de un programa nuevo
  public modificarPrograma: Programa[];    //<- Guarda programa filtrado de lista para modificar
  public programas: Programa[];            //<- Cargado por getPeriodo();
  public confirmDelete: boolean;           //<- Confirma el borrado del elemento?
  public perBuscado: string;               //<- Buscar dni
  public directoresalta: Director[];
  public directoralta: Director;
  public directortemp: Director;
  public directores: Director[];
  public locutoresalta: Locutor[];
  public locutoralta: Locutor;
  public locutortemp: Director;
  public locutores: Locutor[];
  public loading: boolean;
  public cargaDirBool: boolean;
  public cargaLocBool: boolean;

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
    this.cargaDirBool = true;
    this.cargaLocBool = true;
  }

  ngOnInit(): void {
    this.getProgramas();
    this.getLocutores();
    this.getDirectores();
  }

  onSubmit(form: any) {
    this.programa.fkdirectorid = this.directortemp.id;
    this.programa.fklocutoresid = this.locutortemp.id;
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

  LimpiarCampos() {
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
    $('#name').val('');
    $('#lastname').val('');
    $('#dni').val('');
  }

  cargaDir(director: Director)  {
    this.directortemp = director;
    this.cargaDirBool = false;
  }

  cargaLoc(locutor: Locutor){
    this.locutortemp = locutor;
    this.cargaLocBool = false;
  }
}