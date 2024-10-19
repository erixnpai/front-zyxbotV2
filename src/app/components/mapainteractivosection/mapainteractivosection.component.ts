import { Component } from '@angular/core';
import * as L from 'leaflet'; 

@Component({
  selector: 'app-mapainteractivosection',
  standalone: true,
  imports: [],
  templateUrl: './mapainteractivosection.component.html',
  styleUrls: ['./mapainteractivosection.component.css']
})
export default class MapainteractivosectionComponent {
  private map: L.Map | undefined;
  private userMarker: L.Marker<any> | undefined;

  ngOnInit(): void {
    this.initMap();
  }

  coordenadasPorId: { [key: string]: [number, number] } = {
    '1': [34.0522, -118.2437], // Ejemplo: Los Ángeles
    '2': [40.7128, -74.0060],  // Ejemplo: Nueva York
    '3': [51.5074, -0.1278],   // Ejemplo: Londres
    // Agrega más coordenadas según necesites
  };

  private initMap(): void {
    // Verifica que el contenedor 'map' existe en el DOM
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      console.error("Map container not found");
      return;
    }

    // Inicializa el mapa solo si el contenedor existe
    this.map = L.map('map').setView([12.13649335, 86.2240367845234], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);
  }

   // Esta función muestra el valor del ID del elemento ancla que fue clickeado
   showAnchorId(event: MouseEvent): void {
    // Obtener el elemento clickeado (ancla)
    const target = event.target as HTMLElement;

    // Obtener el atributo ID del elemento clickeado
    const anchorId = target.id;

    // Mostrar el ID en la consola o donde prefieras
    console.log('ID del ancla:', anchorId);
  }

  toggleLeaflet() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords: [number, number] = [position.coords.latitude, position.coords.longitude];

        if (this.userMarker) {
          this.userMarker.setLatLng(coords);
        } else {
          this.userMarker = L.marker(coords).addTo(this.map!)
            .bindPopup('You are here')
            .openPopup();
        }
      }, () => {
        alert("Location not found");
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
