import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RegistroComponent } from '../../components/registro/registro.component';
import { FooterComponent } from '../../components/footer/footer.component';
import HerotestvocacionalComponent from '../../components/herotestvocacional/herotestvocacional.component';

@Component({
  selector: 'app-testvocacional',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RegistroComponent,  FooterComponent, HerotestvocacionalComponent],
  templateUrl: './testvocacional.component.html',
  styleUrl: './testvocacional.component.css'
})
export default class TestvocacionalComponent {

}
