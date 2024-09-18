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
    return signInWithPopup(this._auth, provider)
  }
}
