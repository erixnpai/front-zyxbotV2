import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { toast } from 'ngx-sonner';
import { AuthStateService } from '../../services/data-access/auth-state.service';
import { LoginService } from '../../services/login/auth.service';

@Component({
  selector: 'app-chat-unan',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './chat-unan.component.html',
  styleUrl: './chat-unan.component.css'
})
export default class ChatUnanComponent {
  userPhotoURL: string | null = null;
  user: string | null = null
  private _auth = inject(AuthStateService);
  
  constructor(public srvAuth: LoginService, private router: Router) {
    this.CargardatoUser()
  }
  async CargardatoUser() {
    try {
      this.userPhotoURL = this.srvAuth.getUserPhotoURL();
      this.user = this.srvAuth.getUser();
      // await this.srvAuth.getUserPhotoURL();
      // toast.success('carga en usuario');

      // Obtén la URL de la foto del usuario

      console.log("Imagen del usuario", this.userPhotoURL);
      // console.log("Imagen del usuario", this.user);
      // this.router.navigateByUrl('/');
    } catch (error) {
      toast.error('Error al cargar usuario con Google');
    }
  }
}
