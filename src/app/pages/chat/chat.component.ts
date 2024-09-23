import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
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
  user: string | null = null;
  @Input() sidebarOpen: boolean = false;

  // sidebarOpen = false;
  sidebarExpanded = false;

  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('trigger') trigger!: ElementRef;

  constructor(public srvAuth: LoginService, private router: Router) {
    this.CargardatoUser()
  }


  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    this.sidebarExpanded = storedSidebarExpanded === 'true';

    if (this.sidebarExpanded) {
      document.body.classList.add('sidebar-expanded');
    } else {
      document.body.classList.remove('sidebar-expanded');
    }
  }

  // toggleSidebar() {
  //   this.sidebarOpen = !this.sidebarOpen;
  // }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.sidebarOpen || !this.sidebar.nativeElement.contains(event.target) && !this.trigger.nativeElement.contains(event.target)) {
      this.sidebarOpen = false;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (this.sidebarOpen && event.key === 'Escape') {
      this.sidebarOpen = false;
    }
  }

  toggleExpand() {
    this.sidebarExpanded = !this.sidebarExpanded;
    localStorage.setItem('sidebar-expanded', this.sidebarExpanded.toString());
    document.body.classList.toggle('sidebar-expanded', this.sidebarExpanded);
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
