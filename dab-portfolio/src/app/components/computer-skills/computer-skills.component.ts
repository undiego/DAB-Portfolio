import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConocInform } from '../../../assets/extras/ConocimientoInformatico';
import { AuthService } from 'src/app/services/auth.service';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-computer-skills',
  templateUrl: './computer-skills.component.html',
  styleUrls: ['./computer-skills.component.css']
})

export class ComputerSkillsComponent implements OnInit {

  dataPortfolio:any;
  idSection:string = "sec-conocimientos";
  //compSkillsList:any;

  conInfList: ConocInform[] = [];
  isUserLogged: Boolean = false;

  conInfForm: FormGroup;

  constructor(
    private datosPortfolioService: DatosPortfolioService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.conInfForm = this.formBuilder.group({
      id: [''],
      item: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.reloadData();
  }

  private reloadData() {
    this.datosPortfolioService.getDatosConInf().subscribe(data => {this.conInfList = data});
  }

  private clearForm() {
    this.conInfForm.setValue({
      id: '',
      item: ''
    })
  }

  private loadForm(conInf: ConocInform) {
    this.conInfForm.setValue({
      id: conInf.id,
      item: conInf.item
    })
  }

  onSubmit() {
    let conInf: ConocInform = this.conInfForm.value;
    if (this.conInfForm.get('id')?.value == '') {
      this.datosPortfolioService.addItemConInf(conInf).subscribe(
        (newConInf: ConocInform) => {
          this.conInfList.push(newConInf);
        }
      );
    } else {
      this.datosPortfolioService.editItemConInf(conInf).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  onNewConInf() {
    this.clearForm();
  }

  onEditItem(index:number){
    let conInf:any = this.conInfList[index];
    this.loadForm(conInf);
  }

  onDeleteItem(index:number){
    let conInf: ConocInform = this.conInfList[index];
    if(confirm("¿Desea borrar este ítem?")){
    this.datosPortfolioService.deleteItemConInf(conInf.id).subscribe(
      () => {this.reloadData();
      });
    }
  }
  
  /*Se agrega función para que funcione databinding de computer skills component*/
  /*
  onDelete(idSection:string){
    console.log(idSection);
    this.datosPortfolioService.deleteSection(idSection);
  }

  onDeleteItem(id:number){
    console.log(this.idSection);
    this.datosPortfolioService.deleteItem(id);
  }

  onAdd(idSection:string){
    console.log("Add ítem en: " + idSection);
    this.datosPortfolioService.addItem(idSection);
  }

  onEdit(index:number){
    console.log("Edit: " + this.idSection);
    let compSkill:any = this.compSkillsList[index];
    this.datosPortfolioService.editItem(compSkill);
  }*/
}
