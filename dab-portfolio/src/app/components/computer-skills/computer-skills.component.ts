import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-computer-skills',
  templateUrl: './computer-skills.component.html',
  styleUrls: ['./computer-skills.component.css']
})
export class ComputerSkillsComponent implements OnInit {

  dataPortfolio:any;
  idSection:string = "sec-conocimientos";
  compSkillsList:any;

  constructor(private datosPortfolioService: DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolioService.getDatos().subscribe(data => {this.dataPortfolio = data});
    this.datosPortfolioService.getDatos().subscribe(data => {this.compSkillsList = data[4].computerSkills.items});
    
  }
  
  /*Se agrega función para que funcione databinding de computer skills component*/
  onDelete(idSection:string){
    console.log(idSection);
    this.datosPortfolioService.deleteSection(idSection);
  }
}
