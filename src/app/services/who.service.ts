import {Injectable} from '@angular/core';
import {collection, collectionData, doc, Firestore, getDoc, getDocs} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Who} from "../interfaces/who";
@Injectable({
  providedIn: 'root'
})
export class WhoService {

  constructor(private firestore: Firestore) { }

  getWhos(): Observable<Who[]> {
    const newsCollectionRef = collection(this.firestore, 'who')
    return collectionData(newsCollectionRef, {idField: 'id'}) as Observable<Who[]>;
  }
}
