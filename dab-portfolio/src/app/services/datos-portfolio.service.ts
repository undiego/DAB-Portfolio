import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { Educacion } from '../../assets/extras/Educacion';
import { config } from '../../assets/extras/config';

@Injectable({
  providedIn: 'root'
})
export class DatosPortfolioService {

  //private apiUrl = 'http://localhost:5000/data';

  constructor(private http:HttpClient) { }

  // METODOS GENERICOS A ELIMINAR
  /*
  getDatos():Observable<any>{
    //console.log("El servicio datos-portfolio está funcionando");
    //return this.http.get('json');
    //return this.http.get('./assets/data/data.json');
    //return this.http.get<any>(this.apiUrl);
    return this.http.get<any>(config.baseUrl + "educacion/mostrar");
  }
  
  deleteItem(id:number): Observable<any>{
    //console.log("Delete desde servicio ");
    return this.http.delete(config.baseUrl + "educacion/borrar/" + id);
  }

  editItem(educ:any): Observable<any>{
    //console.log("Edit desde el servicio " + educ);
    return this.http.put<any>(config.baseUrl + "educacion/editar/", educ);
  }

  addItem(educ:any): Observable<any>{
    //console.log("Add desde el servicio " + educ);
    return this.http.post<any>(config.baseUrl + "educacion/crear", educ);
  }*/

  /*Se agrega función para que funcione databinding de los componentes*/
  /*
  deleteSection(idSection:string): Observable<any>{
    console.log("delete desde servicio " + idSection);
    confirm("¿Desea borrar esta sección?");
    return this.http.delete<any>(idSection);
  }
  editSection(idSection:string): Observable<any>{
    console.log("Edit desde el servicio " + idSection);
    return this.http.patch(idSection, "");
  }*/

  //Componente Acerca de, Footer y Header
  getDatosVs():Observable<any>{
    return this.http.get<any>(config.baseUrl + "varios/mostrar");
  }

  editItemVs(about:any): Observable<any>{
    return this.http.put<any>(config.baseUrl + "varios/editar/" + about.id, about);
  }

  // Componente Hecho
  getDatosDone():Observable<any>{
    return this.http.get<any>(config.baseUrl + "items/mostrar");
  }

  addItemDone(done:any): Observable<any>{
    return this.http.post<any>(config.baseUrl + "items/crear", done);
  }

  editItemDone(done:any): Observable<any>{
    return this.http.put<any>(config.baseUrl + "items/editar/" + done.id, done);
  }

  deleteItemDone(id:number): Observable<any>{
    return this.http.delete(config.baseUrl + "items/borrar/" + id);
  }

  // Componente Conocimientos informáticos
  getDatosConInf():Observable<any>{
    return this.http.get<any>(config.baseUrl + "conocimientosinformaticos/mostrar");
  }

  addItemConInf(conInf:any): Observable<any>{
    return this.http.post<any>(config.baseUrl + "conocimientosinformaticos/crear", conInf);
  }

  editItemConInf(conInf:any): Observable<any>{
    return this.http.put<any>(config.baseUrl + "conocimientosinformaticos/editar/" + conInf.id, conInf);
  }

  deleteItemConInf(id:number): Observable<any>{
    return this.http.delete(config.baseUrl + "conocimientosinformaticos/borrar/" + id);
  }

  // Componente Experiencia laboral
  getDatosExpLab():Observable<any>{
    return this.http.get<any>(config.baseUrl + "experiencialaboral/mostrar");
  }

  addItemExpLab(expLab:any): Observable<any>{
    return this.http.post<any>(config.baseUrl + "experiencialaboral/crear", expLab);
  }

  editItemExpLab(expLab:any): Observable<any>{
    return this.http.put<any>(config.baseUrl + "experiencialaboral/editar/" + expLab.id, expLab);
  }

  deleteItemExpLab(id:number): Observable<any>{
    return this.http.delete(config.baseUrl + "experiencialaboral/borrar/" + id);
  }

  // Componente Educación
  getDatosEduc():Observable<any>{
    return this.http.get<any>(config.baseUrl + "educacion/mostrar");
  }

  addItemEduc(educ:any): Observable<any>{
    return this.http.post<any>(config.baseUrl + "educacion/crear", educ);
  }

  editItemEduc(educ:any): Observable<any>{
    return this.http.put<any>(config.baseUrl + "educacion/editar/" + educ.id, educ);
  }

  deleteItemEduc(id:number): Observable<any>{
    return this.http.delete(config.baseUrl + "educacion/borrar/" + id);
  }

  // Componente Otras habilidades 
  getDatosOH():Observable<any>{
    return this.http.get<any>(config.baseUrl + "otrashabilidades/mostrar");
  }

  addItemOH(otrHab:any): Observable<any>{
    return this.http.post<any>(config.baseUrl + "otrashabilidades/crear", otrHab);
  }

  editItemOH(otrHab:any): Observable<any>{
    return this.http.put<any>(config.baseUrl + "otrashabilidades/editar/" + otrHab.id, otrHab);
  }

  deleteItemOH(id:number): Observable<any>{
    return this.http.delete(config.baseUrl + "otrashabilidades/borrar/" + id);
  }

}
