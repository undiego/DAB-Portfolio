import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-other-skills',
  templateUrl: './other-skills.component.html',
  styleUrls: ['./other-skills.component.css']
})
export class OtherSkillsComponent implements OnInit {

  dataPortfolio:any;
  idSection:string="sec-otras-habilidades";
  othSkList:any;

  constructor(private datosPortfolioService: DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolioService.getDatos().subscribe(data => {this.dataPortfolio = data});
    this.datosPortfolioService.getDatos().subscribe(data => {this.othSkList = data[7].otherSkills.items});
  }
  /*Se agrega función para que funcione databinding de other skills component*/
  onDelete(idSection:string){
    console.log(idSection);
    this.datosPortfolioService.deleteSection(idSection);
  }
}
