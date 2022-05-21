import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemVarios } from '../../../assets/extras/ItemVarios';
import { AuthService } from 'src/app/services/auth.service';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  dataPortfolio:any;
  idTextoFooter:string ="texto-footer";

  itemVsList: ItemVarios[] = [];
  isUserLogged: Boolean = false;

  footerForm: FormGroup;

  constructor(
    private datosPortfolioService: DatosPortfolioService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.footerForm = this.formBuilder.group({
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
    this.footerForm.setValue({
      id: '',
      text: ''
    })
  }

  private loadForm(itemVs: ItemVarios) {
    this.footerForm.setValue({
      id: itemVs.id,
      text: itemVs.text
    })
  }

  onSubmit() {
    let itemVs: ItemVarios = this.footerForm.value;
    this.datosPortfolioService.editItemVs(itemVs).subscribe(() => {this.reloadData();
    })
  }
  
/*
  onSubmit() {
    let itemVs: ItemVarios = this.footerForm.value;
    if (this.footerForm.get('id')?.value == '') {
      this.datosPortfolioService.addItemVs(itemVs).subscribe(
        (newFooter: ItemVarios) => {
          this.itemVsList.push(newFooter);
        }
      );
    } else {
      this.datosPortfolioService.editItemVs(itemVs).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }
  onNewFooter() {
    this.clearForm();
  }*/

  onEditFooter(){
    let footer:any = this.itemVsList[5];
    this.loadForm(footer);
  }
}
