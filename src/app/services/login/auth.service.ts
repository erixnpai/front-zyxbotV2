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
    return createUserWithEmailAndPassword(
      this._auth,
      user.email,
      user.password
    )
  }

  login(user: User){
    return signInWithEmailAndPassword(
      this._auth,
      user.email,
      user.password
    )
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
      return currentUser.photoURL;
    }
    return null;
  }
}
