import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

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

  signUp(user: User){
    return createUserWithEmailAndPassword(
      this._auth,
      user.email,
      user.password
    )
  }
}
