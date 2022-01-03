import { Component, OnInit,HostBinding} from '@angular/core';
import { BibliotecasService } from '../../../services/biblioteca.service';
import { Comentario } from '../../../models/somos';
import { Router, ActivatedRoute } from '@angular/router';

interface IRegisterForm{
  name:string;
  correo:string;
  DESCIPCION: string;
}
@Component({
  selector: 'app-somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.css']
})
export class SomosComponent implements OnInit {
  @HostBinding('class') classes = 'row';




  register: IRegisterForm = {

    name: '',
    correo: '',
    DESCIPCION: ''
  };



  comentario: Comentario = {

    nombre: '',
    correo: '',
    DESCIPCION: ''
  };

  constructor(private gameService: BibliotecasService, private router: Router) {


   }

  ngOnInit(){

    console.log('hola');
  }
  submit() {


    this.gameService.saveComentario(this.comentario)
    .subscribe(
      res => {
        alert('enviado');
        console.log(res);
        this.router.navigate(['/comentario']);
      },
      err => console.error(err)
    )
  }
}
