import {  get, getDatabase, ref, set } from "firebase/database";
import { app } from "./app";
import { auth } from './firebase'
import { Collection, doc, setDoc } from "firebase/firestore"; 


const db = getDatabase(app);

export async function addTask(userId, titre) {
    await setDoc(doc(db, 'taches'), {
        userId : auth.currentUser?.email,
        titre : this.titre
    });
}

export async function getTask(userId){

}

export async function addColonne(userId, nom){
    await setDoc(doc(db, 'colonnes'), {
        userId : auth.currentUser?.email,
        nom : this.nom
    });
}

export async function getColonne(userId){

}