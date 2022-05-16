import { Component, OnInit } from '@angular/core';
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

  constructor(private datosPortfolioService: DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolioService.getDatos().subscribe(data => {
      //console.log(data);
      this.dataPortfolio = data
    });
  }
    onEdit(text:string){
      console.log("Edit header " + text);
      this.datosPortfolioService.editItem(text);
    }
  }