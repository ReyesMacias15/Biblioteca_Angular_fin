import { Component, OnInit,HostBinding } from '@angular/core';
import { BibliotecasService } from '../../../services/biblioteca.service';
import { Busqueda } from '../../../models/busqueda';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  image: any ;
libro: any =[];
imagen: any =[];

  busqueda: Busqueda = {

    Nombre: '',

  };
	public imageUrls:string='';

	private lastObjectUrl: string;

  Image: any;
  Content: SafeUrl | undefined;
  constructor(private gameService: BibliotecasService, private router: Router, private sanitizer: DomSanitizer) {



		this.lastObjectUrl = "";



  }

  ngOnInit(): void {
const vare=localStorage.getItem('id');
console.log(vare);
  }

submit() {


  this.gameService.Buscar(this.busqueda)
  .subscribe(
    res => {
      alert('enviado');




this.libro=res;

      this.router.navigate(['/Buscar']);
    },
    err => console.error(err)
  )
}

}
