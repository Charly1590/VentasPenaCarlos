import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/domain/Usuario';
import { NavigationExtras, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  contacto: Usuario = new Usuario();
  
  contador=0; 
  
  constructor(private router: Router,
              private contactoService: UsuarioService) { }

  ngOnInit() {
   
  }

  regresar(){
    this.router.navigate([""]);
  }

  guardar(){
    console.log(this.contacto)
    this.contactoService.save(this.contacto)
  }
}
