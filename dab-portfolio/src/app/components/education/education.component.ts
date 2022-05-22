import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from '../../../assets/extras/Educacion';
import { AuthService } from 'src/app/services/auth.service';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {

  dataPortfolio:any;
  idSection:string ="sec-educacion"
  //educList:any;
  completo:any;
  no_completo:any;

  educList: Educacion[] = [];
  isUserLogged: Boolean = false;

  educationForm: FormGroup;

  constructor(
    private datosPortfolioService: DatosPortfolioService,
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) {

      this.educationForm = this.formBuilder.group({
        id: [''],
        titulo: ['', [Validators.required]],
        institucion: ['', [Validators.required]],
        completo: ['', [Validators.required]],
        
      });
     }

  ngOnInit(): void {
    //this.datosPortfolioService.getDatos().subscribe(data => {this.dataPortfolio = data});
    //this.datosPortfolioService.getDatos().subscribe(data => {this.educList = data[6].education.items});
    this.isUserLogged = this.authService.isUserLogged();
    this.reloadData();
  }

  private reloadData() {
    //this.datosPortfolioService.getDatos().subscribe(data => {this.educList = data[6].done.items});
    this.datosPortfolioService.getDatosEduc().subscribe(data => {this.educList = data});
  }

  private clearForm() {
    this.educationForm.setValue({
      id: '',
      titulo: '',
      institucion: '',
      completo: true,
    })
  }

  private loadForm(educacion: Educacion) {
    this.educationForm.setValue({
      id: educacion.id,
      titulo: educacion.titulo,
      institucion: educacion.institucion,
      completo: educacion.completo
    })
  }

  onSubmit() {
    let educacion: Educacion = this.educationForm.value;
    if (this.educationForm.get('id')?.value == '') {
      this.datosPortfolioService.addItemEduc(educacion).subscribe(
        (newEducation: Educacion) => {
          this.educList.push(newEducation);
        }
      );
    } else {
      this.datosPortfolioService.editItemEduc(educacion).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }
  
  onNewEducation() {
    this.clearForm();
  }
  
  onEditItem(index:number){
    //console.log("Edit: " + this.idSection);
    let educ:any = this.educList[index];
    this.loadForm(educ);
    //this.datosPortfolioService.editItem(educ);
  }

  onDeleteItem(index:number){
    //console.log(this.idSection);
    let educ: Educacion = this.educList[index];
    if(confirm("¿Desea borrar este ítem?")){
    this.datosPortfolioService.deleteItemEduc(educ.id).subscribe(
      () => {this.reloadData();
      });
    }
  }
  /*Se agrega función para que funcione databinding de education component*/
  /*
  onDelete(idSection:string){
    console.log(idSection);
    this.datosPortfolioService.deleteSection(idSection);
  }*/
/*
  onAdd(idSection:string){
    console.log("Add ítem en: " + idSection);
    this.datosPortfolioService.addItem(idSection);
  }
*/
  
}
