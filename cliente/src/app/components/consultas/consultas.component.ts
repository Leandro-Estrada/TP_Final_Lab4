import { Component, OnInit } from "@angular/core";
import { Director } from "src/app/models/director.model";
import { Locutor } from "src/app/models/locutor.model";
import { Programa } from "src/app/models/programa.model";
import { LocutorService } from "src/app/services/locutor.service";
import { ProgramaService } from "src/app/services/programa.service";

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
  providers: [ProgramaService, LocutorService],
})

export class ConsultasComponent implements OnInit {

  public programa: Programa;               //<- Utilizado para enviar la carga de un programa nuevo
  public programas: Programa[];            //<- Cargado por getPeriodo();
  public locutores: Locutor[];
  public programasPorLoc: Programa[];
  public programasPorFec: Programa[];
  public programasPorFecLoc: Locutor[];
  public programasPorFecDir: Director[];
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
  ) {
    this.programasPorLoc = new Array();
    this.programasPorFec = new Array();
    this.programasPorFecLoc = new Array();
    this.programasPorFecDir = new Array();
    this.locutores = new Array();                                  //<- Usada para cargar lista de locutores
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
    this.getLocutores();
    this.getProgramas();
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

  getProgramasPorFecha() {
    this.programasPorFec = this.programas.filter(prog => prog.dia == this.fechaprograma);

    // this.programasPorFec.filter(loc => loc.fklocutoresid == this.programasPorLoc[].fklocutoresid)

    // for(let i = 0; i < this.programasPorFec.length; i++){
    //   this.programasPorFecLoc = this.locutores.filter(loc => loc.id == this.programasPorFec[i].fklocutoresid);
    // }

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
