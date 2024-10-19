import { Component, Inject, InjectionToken } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as L from 'leaflet';

@Component({
  selector: 'app-viewmapa',
  standalone: true,
  imports: [],
  templateUrl: './viewmapa.component.html',
  styleUrl: './viewmapa.component.css'
})
export default class ViewmapaComponent {
  private map: L.Map | undefined;

 
  constructor(@Inject(MAT_DIALOG_DATA) public data: { lat: number, long: number }, private dialogRef: MatDialogRef<ViewmapaComponent>) {}

  // Hacemos pública esta función para llamarla desde el diálogo
  public initMap(lat: number, lng: number): void {
    const container = document.getElementById('map'); // Verifica si el contenedor existe
    if (container) {
      this.map = L.map('map', {
        center: [lat, lng], // Usa los parámetros de latitud y longitud
        zoom: 13
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    } else {
      console.error('Map container not found');
    }
  }
  cerraDialogo() {
    this.dialogRef.close();
   }
  }

