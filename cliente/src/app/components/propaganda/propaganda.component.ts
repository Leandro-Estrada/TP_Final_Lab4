import { Component, OnInit } from '@angular/core';
import { Propaganda } from '../../models/propaganda.model';
import { PropagandaService } from '../../services/propaganda.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-propaganda',
  templateUrl: './propaganda.component.html',
  styleUrls: ['./propaganda.component.css'],
  providers: [PropagandaService]
})
export class PropagandaComponent implements OnInit {
  public propaganda: Propaganda;              //<- Utilizado para enviar la carga de un temas musicales nuevo
  public modificarPropaganda: Propaganda[];  //<- Guarda temas musicales filtrado de lista para modificar
  public propagandas: Propaganda[];           //<- Cargado por getTemaMusical();
  public confirmDelete: boolean;              //<- Confirma el borrado del elemento?
  public cuitBuscado: string;                 //<- Buscar dni

  constructor(
    private _propagandaService: PropagandaService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.propaganda = new Propaganda('', '', '');    //<- Usada para crear/modificar
    this.modificarPropaganda = new Array();         //<- Guarda locutor filtrado de lista para modificar
    this.propagandas = new Array();                  //<- Usada para cargar lista de locutores
    this.confirmDelete = false;                      //<- Confirma el borrado del elemento?
    this.cuitBuscado;                                //<- Buscar dni
  }

  ngOnInit(): void {
    this.getPropagandas();
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
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

  onSubmit(form: any) {
    this._propagandaService.createPropaganda(this.propaganda).subscribe(
      response => {
        if (response) {
          location.reload();
        }
      },
      error => {
        alert("No se pudo crear la Propaganda: " + <any>error);
      }
    );
  }

  setConfirmDelete(propanganda: Propaganda) {
    let response = confirm("Eliminar de forma permanente esta propaganda?\n\nCuit: " + propanganda.cuit + "\nEmpresa: " + propanganda.empresa);
    if (response) {
      this.deletePropaganda(parseInt(propanganda.id));
    }
  }

  deletePropaganda(id: number) {
    this._propagandaService.deletePropaganda(id).subscribe(
      response => {
        if (response) {
          location.reload();
        }
      },
      error => {
        alert("No se pudo borrar la propaganda: " + <any>error);
      }
    );
  }

  updatePropaganda(propaganda: Propaganda) {
    this._propagandaService.updatePropaganda(this.propaganda).subscribe(
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
    this.modificarPropaganda = this.propagandas.filter(propa => propa.id == id);
    if (this.modificarPropaganda) {
        $('#nuevo').hide();
        $('#modificar').show();
        $('#cancelar').show();
    }
    this.propaganda = this.modificarPropaganda[0];
  }

  LimpiarCampos(){
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
    $('#titulo').val('');
    $('#autor').val('');
  }

  BuscarPropaganda(){
    let BuscaPropaganda: Propaganda[];
    
    BuscaPropaganda = this.propagandas.filter(prop => prop.cuit == this.cuitBuscado);
    if(BuscaPropaganda[0].cuit != '')
      alert("Tema Musical encontrado con titulo Titulo: " + BuscaPropaganda[0].cuit);
  }
}
