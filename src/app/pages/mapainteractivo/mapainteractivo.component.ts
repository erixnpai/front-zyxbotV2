import { Component } from '@angular/core';
import { RegistroComponent } from '../../components/registro/registro.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import HeromapainteractivoComponent from '../../components/heromapainteractivo/heromapainteractivo.component';
import MapainteractivosectionComponent from '../../components/mapainteractivosection/mapainteractivosection.component';

@Component({
  selector: 'app-mapainteractivo',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RegistroComponent, HeromapainteractivoComponent, FooterComponent, MapainteractivosectionComponent],
  templateUrl: './mapainteractivo.component.html',
  styleUrl: './mapainteractivo.component.css'
})
export default class MapainteractivoComponent {

}
