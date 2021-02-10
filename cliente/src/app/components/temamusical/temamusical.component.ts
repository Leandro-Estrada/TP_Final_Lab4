import { Component, OnInit } from '@angular/core';
import { TemaMusical } from '../../models/temamusical.model';
import { TemaMusicalService } from '../../services/temamusical.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $: any;

@Component({
  selector: 'temamusical',
  templateUrl: './temamusical.component.html',
  styleUrls: ['./temamusical.component.css'],
  providers: [TemaMusicalService]
})
export class TemamusicalComponent implements OnInit {

  public temamusical: TemaMusical;            //<- Utilizado para enviar la carga de un temas musicales nuevo
  public modificarTemaMusical: TemaMusical[]; //<- Guarda temas musicales filtrado de lista para modificar
  public temasmusicales: TemaMusical[];       //<- Cargado por getTemaMusical();
  public confirmDelete: boolean;              //<- Confirma el borrado del elemento?
  public tituloBuscado: string;               //<- Buscar dni

  constructor(
    private _temamusicaleService: TemaMusicalService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.temamusical = new TemaMusical('', '', '');  //<- Usada para crear/modificar
    this.modificarTemaMusical = new Array();         //<- Guarda locutor filtrado de lista para modificar
    this.temasmusicales = new Array();               //<- Usada para cargar lista de locutores
    this.confirmDelete = false;                      //<- Confirma el borrado del elemento?
    this.tituloBuscado;                              //<- Buscar dni
   }

  ngOnInit(): void {
    this.getTemasMusicales();
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
  }

  getTemasMusicales() {
    this._temamusicaleService.getTemasMusicales().subscribe(
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
    this._temamusicaleService.createTemaMusical(this.temamusical).subscribe(
      response => {
        if (response) {
          location.reload();
        }
      },
      error => {
        alert("No se pudo crear el Tema Musical: " + <any>error);
      }
    );
  }

  setConfirmDelete(temamusical: TemaMusical) {
    let response = confirm("Eliminar de forma permanente este Tema Musical?\n\nTitulo: " + temamusical.titulo + "\nAutor: " + temamusical.autor);
    if (response) {
      this.deleteTemaMusical(parseInt(temamusical.id));
    }
  }

  deleteTemaMusical(id: number) {
    this._temamusicaleService.deleteTemaMusical(id).subscribe(
      response => {
        if (response) {
          location.reload();
        }
      },
      error => {
        alert("No se pudo borrar el Tema Musical: " + <any>error);
      }
    );
  }

  updateTemaMusical(temamusical: TemaMusical) {
    this._temamusicaleService.updateTemaMusical(this.temamusical).subscribe(
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
    this.modificarTemaMusical = this.temasmusicales.filter(tema => tema.id == id);
    if (this.modificarTemaMusical) {
        $('#nuevo').hide();
        $('#modificar').show();
        $('#cancelar').show();
    }
    this.temamusical = this.modificarTemaMusical[0];
  }

  LimpiarCampos(){
    $('#nuevo').show();
    $('#modificar').hide();
    $('#cancelar').hide();
    $('#titulo').val('');
    $('#autor').val('');
  }

  BuscarTemaMusical(){
    let BuscaTemaMusical: TemaMusical[];
    
    BuscaTemaMusical = this.temasmusicales.filter(nombre => nombre.titulo == this.tituloBuscado);
    if(BuscaTemaMusical[0].titulo != '')
      alert("Tema Musical encontrado con titulo Titulo: " + BuscaTemaMusical[0].titulo);
  }
}
