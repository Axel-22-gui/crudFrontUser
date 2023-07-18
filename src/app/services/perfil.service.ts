import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Perfil } from '../models/perfils';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  urlPerfil = `${environment.urlApi}Perfil/`;

  constructor(private http:HttpClient) { }

  getAllPerfils(){
    return this.http.get<Perfil[]>(`${this.urlPerfil}list/all`);
  }
}
