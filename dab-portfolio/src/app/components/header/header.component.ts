import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemVarios } from '../../../assets/extras/ItemVarios';
import { AuthService } from 'src/app/services/auth.service';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
  dataPortfolio:any;
  text:string = "";
  alertText:string = "alert-text";
  idTitulo:string = "titulo-header";
  textoDescripcion:string = "texto-descripcion";
  textoUbicacion:string = "texto-ubicacion";

  idSection:string = "header";

  itemVsList: ItemVarios[] = [];
  isUserLogged: Boolean = false;

  headerForm: FormGroup;

  constructor(
    private datosPortfolioService: DatosPortfolioService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.headerForm = this.formBuilder.group({
      id: [''],
      text: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.reloadData();
  }

  private reloadData() {
    this.datosPortfolioService.getDatosVs().subscribe(data => {this.itemVsList = data});
  }

  private clearForm() {
    this.headerForm.setValue({
      id: '',
      text: ''
    })
  }

  private loadForm(itemVs: ItemVarios) {
    this.headerForm.setValue({
      id: itemVs.id,
      text: itemVs.text
    })
  }

  onSubmit() {
    let itemVs: ItemVarios = this.headerForm.value;
    this.datosPortfolioService.editItemVs(itemVs).subscribe(() => {this.reloadData();
    })
  }

  onEditHeaderAlert(){
    let alert:any = this.itemVsList[0];
    this.loadForm(alert);
  }

  onEditHeaderName(){
    let name:any = this.itemVsList[1];
    this.loadForm(name);
  }

  onEditHeaderDescription(){
    let descr:any = this.itemVsList[2];
    this.loadForm(descr);
  }

  onEditHeaderLocation(){
    let loc:any = this.itemVsList[3];
    this.loadForm(loc);
  }
  }