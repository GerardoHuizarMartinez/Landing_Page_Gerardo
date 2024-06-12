import { Injectable, inject } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Work } from "./home.interface";

const PATH = 'work'

@Injectable({
    providedIn: 'root',
})

export class HomeService {
    private _firestore = inject(Firestore);
    private _collection = collection(this._firestore, PATH)
    private _collection2 = collection(this._firestore, "tech")

    getworks(){
        return collectionData(this._collection);// Observable<Work[]>;
    }

    getTecnologies(){
        return collectionData(this._collection2);
    }
}