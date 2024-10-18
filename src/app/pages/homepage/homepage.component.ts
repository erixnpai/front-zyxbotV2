import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeadersectionComponent } from '../../components/headersection/headersection.component';
import { RegistroComponent } from '../../components/registro/registro.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeadersectionComponent, RegistroComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export default class HomepageComponent {

}
