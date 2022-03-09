import { Component, Input, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataPortfolio:any;
  user:string="";
  pass:string="";

  constructor(private datosPortfolioService: DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolioService.getDatos().subscribe(data => {this.dataPortfolio = data});
  }
  onSubmit(user:string, pass:string){
    //this.user=user;
    //this.pass=pass;
    console.log(user);
    console.log(pass);
  }
}
