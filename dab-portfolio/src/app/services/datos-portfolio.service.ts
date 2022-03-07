import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosPortfolioService {

  private apiUrl = 'http://localhost:5000/data';

  constructor(private http:HttpClient) { }

  getDatos():Observable<any>{
    //console.log("El servicio datos-portfolio está funcionando");
    //return this.http.get('json');
    //return this.http.get('./assets/data/data.json');
    return this.http.get<any>(this.apiUrl);
  }

}
