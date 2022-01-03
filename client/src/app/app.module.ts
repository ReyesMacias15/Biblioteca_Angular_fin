import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BibliotecasService } from './services/biblioteca.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SomosComponent } from './components/paginas/somos/somos.component';
import{HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SesionComponent } from './components/paginas/sesion/sesion.component';
import { PerfilComponent } from './components/paginas/perfil/perfil.component';
import { LibroComponent } from './components/paginas/libro/libro.component';
import { RegistroComponent } from './components/paginas/registro/registro.component';
import { CatalogoComponent } from './components/paginas/catalogo/catalogo.component';
import { InicioComponent } from './components/paginas/inicio/inicio.component';
import { AdminComponent } from './components/paginas/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SomosComponent,
    SesionComponent,
    PerfilComponent,
    LibroComponent,
    RegistroComponent,
    CatalogoComponent,
    InicioComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
     BibliotecasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
