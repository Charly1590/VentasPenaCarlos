import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  
  productos:any;

  constructor(private productosServise:ProductosService,private router: Router) { }

  ngOnInit() {
    this.productos=this.productosServise.getContactos();
  }

  editar(contacto:any){
    let params: NavigationExtras={
      queryParams:{
        contacto:contacto
      }
    }
    this.router.navigate(["/editar"], params);
  }

}
