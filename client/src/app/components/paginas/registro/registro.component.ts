import { Component, OnInit,HostBinding } from '@angular/core';
import { Registro } from '../../../models/registro';
import { BibliotecasService } from '../../../services/biblioteca.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  registro: Registro = {

    USERNAME: '',
    CONTRASENA: '',
    CORREO:'',
    CELULAR:''

};
  constructor(private gameService: BibliotecasService, private router: Router) { }

  ngOnInit(): void {
  }
  submit() {

    this.gameService.Guardar(this.registro)
    .subscribe(
      res => {
        alert('enviado');
        console.log(res);
        this.router.navigate(['/comentario']);
      },

    )
  }


}
