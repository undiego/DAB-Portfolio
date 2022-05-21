import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../../assets/extras/Item';
import { AuthService } from 'src/app/services/auth.service';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})

export class DoneComponent implements OnInit {
  
  dataPortfolio:any;
  idSection:string = "sec-hecho";
  //doneList:any;

  doneList: Item[] = [];
  isUserLogged: Boolean = false;

  doneForm: FormGroup;
    
  constructor(
    private datosPortfolioService: DatosPortfolioService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.doneForm = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required]],
      text: ['', [Validators.required]],
      url: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.reloadData();
  }

  private reloadData() {
    this.datosPortfolioService.getDatosDone().subscribe(data => {this.doneList = data});
  }

  private clearForm() {
    this.doneForm.setValue({
      id: '',
      title: '',
      text: '',
      url: '',
    })
  }

  private loadForm(done: Item) {
    this.doneForm.setValue({
      id: done.id,
      title: done.title,
      text: done.text,
      url: done.url
    })
  }

  onSubmit() {
    let done: Item = this.doneForm.value;
    if (this.doneForm.get('id')?.value == '') {
      this.datosPortfolioService.addItemDone(done).subscribe(
        (newDone: Item) => {
          this.doneList.push(newDone);
        }
      );
    } else {
      this.datosPortfolioService.editItemDone(done).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  onNewDone() {
    this.clearForm();
  }

  onEditItem(index:number){
    let done:any = this.doneList[index];
    this.loadForm(done);
  }

  onDeleteItem(index:number){
    let done: Item = this.doneList[index];
    if(confirm("¿Desea borrar este ítem?")){
    this.datosPortfolioService.deleteItemDone(done.id).subscribe(
      () => {this.reloadData();
      });
    }
  }

  /*Se agrega función para que funcione databinding de done component*/
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
    let done:any = this.doneList[index];
    this.datosPortfolioService.editItem(done);
  }*/
}
