import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dataPortfolio:any;
  idTextoFooter:string ="texto-footer";

  constructor(private datosPortfolioService: DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolioService.getDatos().subscribe(data => {this.dataPortfolio = data});
  }
  onEdit(idTextoFooter:string){
    console.log("Edit texto footer");
    this.datosPortfolioService.editSection(idTextoFooter);
  }
}
