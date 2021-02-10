import { Component, OnInit } from '@angular/core';
import { Periodo } from '../../../models/periodo.model';
import { PeriodoService } from '../../../services/periodo.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Propaganda } from 'src/app/models/propaganda.model';
import { TemaMusical } from 'src/app/models/temamusical.model';
import { Programa } from 'src/app/models/programa.model';
import { PropagandaService } from 'src/app/services/propaganda.service';
import { TemaMusicalService } from 'src/app/services/temamusical.service';
import { ProgramaService } from 'src/app/services/programa.service';
declare var $: any;

@Component({
  selector: 'periodo',
  templateUrl: './periodo.component.html',
  providers: [PeriodoService, ProgramaService, PropagandaService, TemaMusicalService]
})
export class PeriodoComponent implements OnInit {
  public periodo: Periodo;                //<- Utilizado para enviar la carga de un periodo nuevo
  public modificarPeriodo: Periodo[];     //<- Guarda periodo filtrado de lista para modificar
  public periodos: Periodo[];             //<- Cargado por getPeriodo();
  public confirmDelete: boolean;          //<- Confirma el borrado del elemento?
  public perBuscado: string;              //<- Buscar dni
  public progamaperiodo: Programa[];
  public programaper: Programa;
  public programas: Programa[];
  public propagandaperiodo: Propaganda[];
  public propagandaper: Propaganda;
  public propagandas: Propaganda[];
  public temamusicalperiodo: TemaMusical[];
  public temamusicalper: TemaMusical;
  public temasmusicales: TemaMusical[];
  public loading: boolean;
  constructor(
    private _periodoService: PeriodoService,
    private _programaService: ProgramaService,
    private _propagandaService: PropagandaService,
    private _temasmusicalService: TemaMusicalService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.periodo = new Periodo('', new Date(), '', '', '');  //<- Usada para crear/modificar
    this.modificarPeriodo = new Array();                       //<- Guarda periodo filtrado de lista para modificar
    this.periodos = new Array();                               //<- Usada para cargar lista de periodoes
    this.confirmDelete = false;                                //<- Confirma el borrado del elemento?
    this.perBuscado;                                           //<- Buscar duracion
    this.programas = new Array();
    this.propagandas = new Array();
    this.periodos = new Array();
    this.loading = true;
  }

  ngOnInit(): void {
    this.getPeriodos();
    this.getProgramas();
    this.getPropagandas();
    this.getTemasMusicales();
    
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
  }

  getPeriodos() {
    this._periodoService.getPeriodos().subscribe(
      response => {
        if (response.periodos) {
          this.periodos = response.periodos;
          console.log(this.periodos);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
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

  getTemasMusicales() {
    this._temasmusicalService.getTemasMusicales().subscribe(
      response => {
        if (response.temasmusicales) {
          this.temasmusicales = response.temasmusicales;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(form: any) {
    this._periodoService.createPeriodo(this.periodo).subscribe(
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

  getPropagandas() {
    this._propagandaService.getPropagandas().subscribe(
      response => {
        if (response.propagandas) {
          this.propagandas = response.propagandas;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  setConfirmDelete(periodo: Periodo) {
    let response = confirm("Eliminar de forma permanente este periodo?\n\nFecha: " + periodo.duracion);
    if (response) {
      this.deletePeriodo(parseInt(periodo.id));
    }
  }

  deletePeriodo(id: number) {
    this._periodoService.deletePeriodo(id).subscribe(
      response => {
        if (response) {
          location.reload();
        }
      },
      error => {
        alert("No se pudo borrar Periodo: " + <any>error);
      }
    );
  }

  updatePeriodo(periodo: Periodo) {
    this._periodoService.updatePeriodo(this.periodo).subscribe(
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
    this.modificarPeriodo = this.periodos.filter(dir => dir.id == id);
    if (this.modificarPeriodo) {
      $('#nuevo').hide();
      $('#modificar').show();
      $('#cancelar').show();
    }
    this.periodo = this.modificarPeriodo[0];
  }

  LimpiarCampos() {
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
    $('#name').val('');
    $('#lastname').val('');
    $('#dni').val('');
  }

  BuscarPeriodo(){
  //   let BuscaPeriodo: Periodo[];

  //   BuscaPeriodo = this.periodos.filter(per => per.duracion == this.perBuscado);
  //   if(BuscaPeriodo[0].duracion != '')
  //     alert("Periodo Encontrado, Duracion: " + BuscaPeriodo[0].duracion);
  }

  VerDatos(periodo: Periodo){
    let idprograma = periodo.fkprogramasid;
    let idpropaganda = periodo.fkpropagandasid;
    let idtemamusical = periodo.fktemasmusicalesid;

    this.progamaperiodo = this.programas.filter(prog => prog.id == idprograma);
    this.programaper = this.progamaperiodo[0];

    this.propagandaperiodo = this.propagandas.filter(prop => prop.id == idpropaganda);
    this.propagandaper = this.propagandaperiodo[0];

    this.temamusicalperiodo = this.temasmusicales.filter(temas => temas.id == idtemamusical);
    this.temamusicalper = this.temamusicalperiodo[0];

    this.loading = false;
  }
}
