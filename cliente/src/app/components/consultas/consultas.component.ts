import { Component, OnInit } from "@angular/core";
import { Director } from "src/app/models/director.model";
import { Locutor } from "src/app/models/locutor.model";
import { Programa } from "src/app/models/programa.model";
import { DirectorService } from "src/app/services/director.service";
import { LocutorService } from "src/app/services/locutor.service";
import { ProgramaService } from "src/app/services/programa.service";

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
  providers: [ProgramaService, LocutorService, DirectorService],
})

export class ConsultasComponent implements OnInit {

  public programa: Programa;               //<- Utilizado para enviar la carga de un programa nuevo
  public programas: Programa[];            //<- Cargado por getPeriodo();
  public locutores: Locutor[];
  public directores: Director[];
  public programasPorLoc: Programa[];
  public programasPorFec: Programa[];
  public LocutorNombrePorId: Locutor[];
  public DirectorNombrePorId: Director[];
  public locutortemp: Locutor;
  public progtemp: Programa;
  public fechaprograma: Date;
  public cargaLocBool: boolean;
  public cargaPogrBool: boolean;
  public progPorLoc: boolean;
  public cargaProgFec: boolean;
  constructor(
    private _locutorService: LocutorService,
    private _programaService: ProgramaService,
    private _directorService: DirectorService,
  ) {
    this.programasPorLoc = new Array();
    this.programasPorFec = new Array();
    this.LocutorNombrePorId = new Array();
    this.DirectorNombrePorId = new Array();
    this.locutores = new Array();                                  //<- Usada para cargar lista de locutores
    this.directores = new Array();                                  //<- Usada para cargar lista de directores
    this.locutortemp = new Locutor("", "", "", "");                //<- Usada para cargar lista de locutores
    this.progtemp = new Programa('', '', new Date(), new Date(), new Date(), '', '');
    this.programas = new Array();
    this.fechaprograma = new Date;
    this.cargaLocBool = true;
    this.cargaPogrBool = true;
    this.progPorLoc = true;
    this.cargaProgFec = true;
  }

  ngOnInit(): void {
    this.getProgramas();
    this.getDirectores();
    this.getLocutores();
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

  getOneLocutor(id: number){
    this._locutorService.getOneLocutor(id).subscribe(
      response => {
        if (response.locutor) {
          this.LocutorNombrePorId.push(response.locutor);
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
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  getOneDirector(id: number){
    this._directorService.getOneDirector(id).subscribe(
      response => {
        if (response.director) {
          this.DirectorNombrePorId.push(response.director);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  getProgramasPorFecha() {
    this.programasPorFec = this.programas.filter(prog => prog.dia == this.fechaprograma);

    this.programasPorFec.forEach(idpersonal => {
      this.getOneLocutor(parseInt(idpersonal.fklocutoresid));
      this.getOneDirector(parseInt(idpersonal.fkdirectorid));
    });

    // for(let i = 0; i < this.programasPorFec.length; i++){
    //   this.getOneLocutor(parseInt(this.programasPorFec[i].fklocutoresid));
    // }
    
    // for(let i = 0; i < this.programasPorFec.length; i++){
    //   this.getOneDirector(parseInt(this.programasPorFec[i].fkdirectorid));
    // }

    console.log(this.LocutorNombrePorId);
    console.log(this.DirectorNombrePorId);

    this.cargaProgFec = false;
  }

  getProgramasPorLocutor(locutor: Locutor) {
    this.locutortemp = locutor;
    this.programasPorLoc = [];
    this.programasPorLoc = this.programas.filter(prog => prog.fklocutoresid == locutor.id);

    this.progPorLoc = false;
  }

  MuestraLoc() {
    this.cargaLocBool = !this.cargaLocBool;
  }

  MuestraProg() {
    this.cargaPogrBool = !this.cargaPogrBool;
  }
}
