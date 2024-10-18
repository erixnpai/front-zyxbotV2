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
