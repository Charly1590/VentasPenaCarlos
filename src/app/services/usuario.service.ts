import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../domain/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(public afs: AngularFirestore) { }
  
  save(usuario:Usuario){
      const refContactos = this.afs.collection("usuarios");
      
      if (usuario.uid == null){
        usuario.uid = this.afs.createId();
        usuario.activo = true;
      }

      refContactos.doc(usuario.uid).set(Object.assign({}, usuario));
  }

  getContactos(usuario:Usuario):Observable<any[]>{
    return this.afs.collection("usuarios",
            ref=> ref.where("user","==",usuario.user).where("password","==",usuario.password)).valueChanges();
  }
}
