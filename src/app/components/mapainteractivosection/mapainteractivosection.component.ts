import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapainteractivosection',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './mapainteractivosection.component.html',
  styleUrls: ['./mapainteractivosection.component.css']
})
export default class MapainteractivosectionComponent {
  private map: L.Map  | undefined;
  private userMarker: L.Marker<any> | undefined;
  mostrarMapa: boolean = false;

  // constructor(public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const container = document.getElementById('map'); // Verifica si el contenedor existe
    if (container) {
      this.map = L.map('map', {
        center: [14.3392053, -83.8790622], // Ajusta las coordenadas según lo necesario
        zoom: 13
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    } else {
      console.error('Map container not found');
    }
  }

  toggleMapa(): void {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
      mapContainer.style.display = mapContainer.style.display === 'none' ? 'block' : 'none';
    }
  }

    // getLocations() {
    //   if(navigator.geolocation){
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       const { latitude, longitude } = position.coords;
    //       this.map.setView([latitude, longitude], 13);
    //       if (this.userMarker) {
    //         this.map.removeLayer(this.userMarker);
    //       }
    //       this.userMarker = L.marker([latitude, longitude]).addTo(this.map);
    //     });
    //   }
    // }
}
