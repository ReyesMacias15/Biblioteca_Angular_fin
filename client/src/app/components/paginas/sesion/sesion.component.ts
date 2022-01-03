import { Component, HostBinding, OnInit } from '@angular/core';

import { IRegisterForm } from '../../../models/inicio_sesion';

import { BibliotecasService } from '../../../services/biblioteca.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})


export class SesionComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  usuario: any =[];


  register: IRegisterForm = {


      Correo: '',
      CONTRASENA: ''
  };


  constructor(private gameService: BibliotecasService, private router: Router) {  }

  ngOnInit(): void {


  }
  submit() {


 const valor=    this.gameService.buscarUsuario(this.register)
    .subscribe(
      res => {
        this.usuario=res;

       this.router.navigate(['/sesion']);

      if( Object.keys(res).length === 0){
        alert('NO inicio');
        console.log(this.usuario);
        return;
      }
      else{

        localStorage.setItem("id",this.usuario[0].ID,);
        localStorage.setItem("nombre",this.usuario[0].NOMBRE_USUARIO,);
         alert('enviado');


      }



      },
      err => console.error(err)
    )
  }
}
