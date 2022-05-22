import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaLaboral } from '../../../assets/extras/ExperienciaLaboral';
import { AuthService } from 'src/app/services/auth.service';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})

export class WorkExperienceComponent implements OnInit {

  dataPortfolio:any;
  idSection:string = "sec-experiencia";
  //workExpList:any;
  
  expLabList: ExperienciaLaboral[] = [];
  isUserLogged: Boolean = false;

  expLabForm: FormGroup;

  constructor(
    private datosPortfolioService: DatosPortfolioService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { 
    this.expLabForm = this.formBuilder.group({
      id: [''],
      institucion: ['', [Validators.required]],
      area: ['', [Validators.required]],
      duracion: ['', [Validators.required]],
    })
  }



  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.reloadData();
  }

  private reloadData() {
    this.datosPortfolioService.getDatosExpLab().subscribe(data => {this.expLabList = data});
  }

  private clearForm() {
    this.expLabForm.setValue({
      id: '',
      institucion: '',
      area: '',
      duracion: ''
    })
  }

  private loadForm(expLab: ExperienciaLaboral) {
    this.expLabForm.setValue({
      id: expLab.id,
      institucion: expLab.institucion,
      area: expLab.area,
      duracion: expLab.duracion
    })
  }

  onSubmit() {
    let expLab: ExperienciaLaboral = this.expLabForm.value;
    if (this.expLabForm.get('id')?.value == '') {
      this.datosPortfolioService.addItemExpLab(expLab).subscribe(
        (newExpLab: ExperienciaLaboral) => {
          this.expLabList.push(newExpLab);
        }
      );
    } else {
      this.datosPortfolioService.editItemExpLab(expLab).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  onNewExpLab() {
    this.clearForm();
  }

  onEditItem(index:number){
    let expLab:any = this.expLabList[index];
    this.loadForm(expLab);
  }

  onDeleteItem(index:number){
    let expLab: ExperienciaLaboral = this.expLabList[index];
    if(confirm("¿Desea borrar este ítem?")){
    this.datosPortfolioService.deleteItemExpLab(expLab.id).subscribe(
      () => {this.reloadData();
      });
    }
  }


  /*Se agrega función para que funcione databinding de work experience component*/
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
    let workExp:any = this.workExpList[index];
    this.datosPortfolioService.editItem(workExp);
  }*/
}
