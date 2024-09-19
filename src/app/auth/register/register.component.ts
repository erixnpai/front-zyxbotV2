import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validators';
import { LoginService } from '../../services/login/auth.service';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export default class RegisterComponent {
  loginForm!: FormGroup;

  constructor(public srvAuth: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  // Validators.minLength(6)]

  async ngsubmit() {
    if (this.loginForm.valid)
      console.log('datos enviados', this.loginForm.value);
    // return
    try {
      const { email, password } = this.loginForm.value;

      if (!email || !password) return;

      await this.srvAuth.register({ email, password });
      toast.success('Usuario creado');
      this.router.navigateByUrl('/chat/ichat');
    } catch (error) {
      toast.error('Error al crear usuario');
    }
  }

  // isRequired(field: 'email' | 'password') {
  //   return isRequired(field, this.loginForm);}

  async clickGoogle() {
    try {
      const result = await this.srvAuth.signGoogle(); // Asegúrate de que el método signGoogle retorna una promesa.
      
      if (result) {
        toast.success('Usuario autenticado con Google');
        this.router.navigateByUrl('/chat/ichat');  // Redirige solo si la autenticación es exitosa.
      } else {
        throw new Error('No se pudo completar la autenticación');
      }
    } catch (error) {
      toast.error('Error al autenticar con Google');
    }
  }
  
  hasEmailError() {
    return hasEmailError(this.loginForm);
  }
}
