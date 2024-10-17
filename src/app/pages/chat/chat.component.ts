import { CommonModule, NgClass } from '@angular/common';
import { Component, inject} from '@angular/core';
import { LoginService } from '../../services/login/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { toast } from 'ngx-sonner';
import { async } from 'rxjs';
import { AuthStateService } from '../../services/data-access/auth-state.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NgClass],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export default class ChatComponent {
  userPhotoURL: string | null = null;
  user: string | null = null
  private _auth = inject(AuthStateService);
  expanded = true;
  isMobileScreen: boolean = false;

  
  
  constructor(public srvAuth: LoginService, private router: Router) {
    this.CargardatoUser()
  }

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }


  checkScreenSize() {
    this.isMobileScreen = window.innerWidth < 768; // Establece el breakpoint
    // Si es móvil, el sidebar se contrae por defecto
    if (this.isMobileScreen) {
      this.expanded = false;
    }
  }

  async CerrarSesion() {
    await this._auth.logOut();
    this.router.navigateByUrl('/auth/login');
  }

  toggleSidebar() {
    this.expanded = !this.expanded;
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
