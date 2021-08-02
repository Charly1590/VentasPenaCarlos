import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/domain/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  contacto: Usuario = new Usuario();
  
  contador=0; 

  contactos : any;

  centinela : boolean = false;
  
  constructor(private router: Router,
              private contactoService: UsuarioService) { }

  ngOnInit() {
   
  }

  regresar(){
    this.router.navigate([""]);
  }

  verificar(){
    console.log(this.contacto)
    this.contactos = this.contactoService.getContactos(this.contacto)
    this.contactos.forEach((element) => {
       console.log(element[0])
       if(element[0]!=undefined){
          this.router.navigate(["listado"]);
       }
    })

      
  }

}
