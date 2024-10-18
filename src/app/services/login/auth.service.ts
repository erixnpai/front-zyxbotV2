import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';

export interface User {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _auth = inject(Auth) 

  // constructor() { }

  register(user: User){ 
    let resp = createUserWithEmailAndPassword(
      this._auth,
      user.email,
      user.password
    )

    console.log( resp, "para firebaseeeeeee");
    
    return resp;
  }

  login(user: User){

    let resp = signInWithEmailAndPassword(
      this._auth,
      user.email,
      user.password
    )
    return resp;
  }

  signGoogle(){
    const provider = new GoogleAuthProvider()
   // provider.setCustomParameters({prompt: 'select_account'}) // ESTO ES OPCIONAL YA QUE SIRVE PARA FORZAR PARA A ELEGIR UNA CUENTA DE GOOGLE
    return signInWithPopup(this._auth, provider)
  }

  // ESTA FUNCION ES PARA TRAER LAS IMAGENES LOGUEADA POR USUARIO
  getUserPhotoURL() {
    const currentUser = this._auth.currentUser;
    if (currentUser) {
      return currentUser.photoURL || currentUser.displayName;
    }
    return null;
  }

  // ESTA FUNCION ES PARA TRAER EL NOMBRE LOGUEADA POR USUARIO
  getUser() {
    const currentUser = this._auth.currentUser;
    if (currentUser) {
      return currentUser.displayName;
    }
    return null;
  }
}
