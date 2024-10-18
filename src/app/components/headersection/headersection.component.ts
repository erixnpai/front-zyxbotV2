import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';



interface Review {
  name: string;
  
  body: string;
  img: string;
}

@Component({
  selector: 'app-headersection',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './headersection.component.html',
  styleUrl: './headersection.component.css'
})
export class HeadersectionComponent {
  reviews: Review[] = [
    { name: 'Informacón Cofiable', body: "Proporciona datos actualizadoss y verficados sobre las Universidades de Nicaragua.", img: 'https://avatar.vercel.sh/jack' },
    { name: 'Test Vocacional', body: "Ayuda a los jóvenes a descubrir sus intereses y habilidades.", img: 'https://avatar.vercel.sh/jill' },
    { name: 'Facilidad de uso ', body: "Su interfz intuitiva permite obtener la información que necesitas fácilmente.", img: 'https://avatar.vercel.sh/john' },
    { name: 'Asistencia Virtual Personalizada', body: "Disponible las 24 horas del día, los 7 días a la semana.", img: 'https://avatar.vercel.sh/jane' },
    { name: 'Soporte Multicanal', body: "Smartphones, tablets y computadoras.", img: 'https://avatar.vercel.sh/jenny' },
    { name: 'Mapa Interactivo de Unviersidades',body: "Incluye un mapa interactivo que facilita la localización de Universidades Nicaraguenses.", img: 'https://avatar.vercel.sh/james' },
  ];

  firstRow = this.reviews.slice(0, this.reviews.length / 2);
  secondRow = this.reviews.slice(this.reviews.length / 2);
}
