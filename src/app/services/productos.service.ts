import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Productos } from '../domain/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor(public afs: AngularFirestore) { }

  getContactos():Observable<any[]>{
    return this.afs.collection("productos",
            ref=> ref.where("activo","==",true)).valueChanges();
  }
}
