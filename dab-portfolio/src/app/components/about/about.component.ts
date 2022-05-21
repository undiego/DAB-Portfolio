import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemVarios } from '../../../assets/extras/ItemVarios';
import { AuthService } from 'src/app/services/auth.service';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  dataPortfolio:any;
  idSection:string = "about";

  itemVsList: ItemVarios[] = [];
  isUserLogged: Boolean = false;

  aboutForm: FormGroup;

  constructor(
    private datosPortfolioService: DatosPortfolioService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.aboutForm = this.formBuilder.group({
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
    this.aboutForm.setValue({
      id: '',
      text: ''
    })
  }

  private loadForm(itemVs: ItemVarios) {
    this.aboutForm.setValue({
      id: itemVs.id,
      text: itemVs.text
    })
  }

  onSubmit() {
    let itemVs: ItemVarios = this.aboutForm.value;
    this.datosPortfolioService.editItemVs(itemVs).subscribe(() => {this.reloadData();
      }
    )
  }

  onEditAbout(){
    let about:any = this.itemVsList[4];
    this.loadForm(about);
  }


}
