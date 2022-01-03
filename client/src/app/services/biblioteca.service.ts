import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Comentario } from '../models/somos';
import { Perfil } from '../models/perfil';
import { IRegisterForm } from '../models/inicio_sesion';
import { Observable } from 'rxjs';
import { Registro } from '../models/registro';
import { Busqueda } from '../models/busqueda';
@Injectable({
  providedIn: 'root'
})
export class BibliotecasService {


  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  saveComentario(comentario:Comentario) {

    return this.http.post(`${this.API_URI}/Biblioteca/comentario`,comentario);

  }
  saveperfil(comentario:Perfil) {

    return this.http.post(`${this.API_URI}/Biblioteca/perfil`,comentario);

  }
  VER(comentario:Perfil) {

    return this.http.post(`${this.API_URI}/Biblioteca/perfil/VER`,comentario);

  }

  buscarUsuario(register: IRegisterForm) {

    return this.http.post(`${this.API_URI}/Biblioteca/sesion`,register);

  }
  Guardar(registro: Registro) {

    return this.http.post(`${this.API_URI}/Biblioteca/registro`,registro);

  }
  Buscar(busqueda: Busqueda) {

    return this.http.post(`${this.API_URI}/Biblioteca/Buscar`,busqueda);

  }
}





