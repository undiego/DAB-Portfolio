import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  dataPortfolio:any;
  idSection:string ="sec-educacion"
  educList:any;
  completo:any;
  no_completo:any;

  constructor(private datosPortfolioService: DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolioService.getDatos().subscribe(data => {this.dataPortfolio = data});
    this.datosPortfolioService.getDatos().subscribe(data => {this.educList = data[6].education.items});
  }
  /*Se agrega función para que funcione databinding de education component*/
  onDelete(idSection:string){
    console.log(idSection);
    this.datosPortfolioService.deleteSection(idSection);
  }

  onAdd(idSection:string){
    console.log("Add ítem en: " + idSection);
    this.datosPortfolioService.addItem(idSection);
  }
}
