import { Component, OnInit,HostBinding, ElementRef, ViewChild ,Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BibliotecasService } from '../../../services/biblioteca.service';
import { Perfil } from '../../../models/perfil';
import { DOCUMENT } from '@angular/common';

import { Console } from 'console';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  perfil: any= {
ID:'',
    CORREO: '',
    CONTRASENA: '',
    USERNAME: '',
    CELULAR: '',
    APELLIDO_USUARIO: '',
    NOMBRE_USUARIO: '',
    DIRECCION: '',
    CONTACTO: '',
  };

  constructor(private gameService: BibliotecasService, private router: Router ) { }
  libro: any =[];
  @ViewChild('cedula', { static: false  })
  cedula!: ElementRef;

  public data:any;



  ngOnInit(): void {
    this.perfil.ID=localStorage.getItem('id');
this.perfil.NOMBRE_USUARIO='HOLA';
  this.libro= this.GETDATOS();
  console.log(this.libro[0]);
  

  }
  submit() {

console.log(this.perfil);
    this.gameService.saveperfil(this.perfil)
    .subscribe(
      res => {


      console.log(this.libro);

        this.router.navigate(['/Perfil']);

      },
      err => console.error(err)
    )

  }
GETDATOS(){
  this.gameService.VER(this.perfil)
  .subscribe(
    res => {
      alert('enviado');

      this.libro=res;
      console.log(this.libro[0]);
      this.data=this.libro[0].CONTACTO;
      this.router.navigate(['/Perfil']);
      return res;

    },
    err => console.error(err)
  )

}
}
