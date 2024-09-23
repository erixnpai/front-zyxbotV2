import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { LoginService } from '../../services/login/auth.service';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { async } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export default class ChatComponent {
  userPhotoURL: string | null = null;
  user: string | null = null

  constructor(public srvAuth: LoginService, private router: Router) {
    this.CargardatoUser()
  }

  async CargardatoUser() {
    try {
      // await this.srvAuth.getUserPhotoURL();
      toast.success('carga en usuario');

      // Obtén la URL de la foto del usuario
      this.userPhotoURL = this.srvAuth.getUserPhotoURL();
      this.user = this.srvAuth.getUser();

      console.log("Imagen del usuario", this.userPhotoURL);
      console.log("Imagen del usuario", this.user);
      // this.router.navigateByUrl('/');
    } catch (error) {
      toast.error('Error al cargar usuario con Google');
    }
  }
}
