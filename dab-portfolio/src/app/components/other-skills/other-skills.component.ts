import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtrasHabilidades } from '../../../assets/extras/OtrasHabilidades';
import { AuthService } from 'src/app/services/auth.service';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-other-skills',
  templateUrl: './other-skills.component.html',
  styleUrls: ['./other-skills.component.css']
})

export class OtherSkillsComponent implements OnInit {

  dataPortfolio:any;
  idSection:string="sec-otras-habilidades";
  //othSkList:any;

  otrHabList: OtrasHabilidades[] = [];
  isUserLogged: Boolean = false;

  otrasHabForm: FormGroup;

  constructor(
    private datosPortfolioService: DatosPortfolioService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.otrasHabForm = this.formBuilder.group({
      id: [''],
      text: ['', [Validators.required]],
      url: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.reloadData();
  }

  private reloadData() {
    this.datosPortfolioService.getDatosOH().subscribe(data => {this.otrHabList = data});
  }

  private clearForm() {
    this.otrasHabForm.setValue({
      id: '',
      text: '',
      url: ''
    })
  }

  private loadForm(otrHab: OtrasHabilidades) {
    this.otrasHabForm.setValue({
      id: otrHab.id,
      text: otrHab.text,
      url: otrHab.url
    })
  }

  onSubmit() {
    let otrHab: OtrasHabilidades = this.otrasHabForm.value;
    if (this.otrasHabForm.get('id')?.value == '') {
      this.datosPortfolioService.addItemOH(otrHab).subscribe(
        (newOtrasHab: OtrasHabilidades) => {
          this.otrHabList.push(newOtrasHab);
        }
      );
    } else {
      this.datosPortfolioService.editItemOH(otrHab).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  onNewOtrasHab() {
    this.clearForm();
  }

  onEditItem(index:number){
    let otrHab:any = this.otrHabList[index];
    this.loadForm(otrHab);
    //this.datosPortfolioService.editItem(educ);
  }

  onDeleteItem(index:number){
    let otrHab: OtrasHabilidades = this.otrHabList[index];
    if(confirm("¿Desea borrar este ítem?")){
    this.datosPortfolioService.deleteItemOH(otrHab.id).subscribe(
      () => {this.reloadData();
      });
    }
  }


  /*Se agrega función para que funcione databinding de other skills component*/
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
    let oSk:any = this.othSkList[index];
    this.datosPortfolioService.editItem(oSk);
  }*/
}
