import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';
import { LoginService } from '../../services/login/auth.service';
import { hasEmailError } from '../../utils/validators';
import { AutentificationService } from '../../services/autentification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  loginForm!: FormGroup;

  constructor(public srvAuth: LoginService, private router: Router, private autserv: AutentificationService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }
  // Validators.minLength(6)]

  async ngsubmit() {
    if (this.loginForm.valid)
      try {
        const { email, password } = this.loginForm.value;

        if (!email || !password) return;

        await this.srvAuth.login({ email, password });
        toast.success('Acceso valido');
        this.router.navigate(['/chat/']);
      } catch (error) {
        toast.error('Error usuario no existe');
      }
  }

  async clickGoogle() {
    try {
      const result = await this.srvAuth.signGoogle(); // Asegúrate de que el método signGoogle retorna una promesa.

      if (result) {

        const tok = await this.autserv.getToken({ user: result.user.displayName, email: result.user.email }).toPromise();

        console.log(tok);

        sessionStorage.setItem('token', JSON.stringify(tok));

        // console.log(JSON.stringify(result), null, 2);
        console.log(result.user.displayName);
        console.log(result.user.email);


        toast.success('Usuario autenticado con Google');
        this.router.navigate(['/chat/']);  // Redirige solo si la autenticación es exitosa.
      } else {
        throw new Error('No se pudo completar la autenticación');
      }
    } catch (error) {
      toast.error('Error al autenticar con Google');
    }
  }

  // isRequired(field: 'email' | 'password') {
  //   return isRequired(field, this.loginForm);}

  hasEmailError() {
    return hasEmailError(this.loginForm);
  }
}
