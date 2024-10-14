import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { AuthStateService } from './services/data-access/auth-state.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-zyxbotV2';
  // constructor(private _auth: AuthStateService){}
    private _auth = inject(AuthStateService);
    private router = inject(Router);
  async CerrarSesion() {
    await this._auth.logOut();
    this.router.navigateByUrl('/auth/login');
  }
  ngOnInit() {
    AOS.init();
  }
}
