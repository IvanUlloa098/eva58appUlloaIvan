import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Receta } from '../domain/recetas';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(public afs: AngularFirestore) { }

  save(receta: Receta) {
    const refContactos = this.afs.collection("recetas") 

    if(receta.id == null) {
      receta.id = this.afs.createId()
      receta.activo = true
    }

    refContactos.doc(receta.id).set(Object.assign({}, receta))
  }

  getRecetas(): Observable<any[]> {
    return this.afs.collection("recetas",
      ref => ref.where("activo", "==", true)
    ).valueChanges();
  }

  filterRecetas(aux : string): Observable<any[]> {
    return this.afs.collection("recetas",
      ref => ref.where("nombre", ">=", aux)
    ).valueChanges();
  }

}
