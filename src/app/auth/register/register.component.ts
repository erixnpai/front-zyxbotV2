import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validators';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export default class RegisterComponent {
  loginForm!: FormGroup;
  // srvAuth: any

  constructor(public srvAuth: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  async ngsubmit() {
    if (this.loginForm.valid)

      try {
        const {email, password} = this.loginForm.value;

        if(!email || !password) return;

        await this.srvAuth.signUp({email, password});
      } catch (error) {
        
      }
  }

  // isRequired(field: 'email' | 'password') {
  //   return isRequired(field, this.loginForm);}

    hasEmailError() {
      return hasEmailError(this.loginForm);
    }
}
