import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as L from 'leaflet';
import ViewmapaComponent from './viewmapa/viewmapa.component';

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

  constructor(public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    
  }

  private initMap(lat: number, lng: number): void {
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

  toggleMapa(): void {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
      mapContainer.style.display = mapContainer.style.display === 'none' ? 'block' : 'none';
    }
  }

  AbrirDialogo(type: number, elementoId: number) {
    let dialogref: MatDialogRef<ViewmapaComponent, any>;
    let lat: number, long: number;
  
    switch (type) {
      case 1:
        lat = 14.3392053;
        long = -83.8790622;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("RAACn");
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;
  
      case 2:
        lat = 12.558473;
        long = -84.1015992;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("RAACS");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;
      case 3:
        lat = 12.467867;
        long = -85.65922541;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Boaco");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 4:
        lat = 11.6635659;
        long = -86.3090376;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Carazo");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 5:
        lat = 12.8890816;
        long = -86.9577726;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Chinandega");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 6:
        lat = 11.8915422;
        long = -85.1013926;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Chontales");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 7:
        lat = 13.2455577;
        long = -86.4554189;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Estelí");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 8:
        lat = 11.9303801;
        long = -85.9535897;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Granada");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 9:
        lat = 11.9303801;
        long = -85.9535897;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Jinotega");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 10:
        lat = 12.619767;
        long = -86.5918195;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("León");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 11:
        lat = 13.5124895;
        long = -86.3429284;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Madriz");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 12:
        lat = 11.9338598;
        long = -86.5252826;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Managua");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 13:
        lat = 12.0008289;
        long = -86.0513672;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Masaya");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 14:
        lat = 12.9636338;
        long = -85.5006651;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Matagalpa");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 15:
        lat = 13.7792903;
        long = -86.0628511;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Nueva Segovia");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 16:
        lat = 11.2124304;
        long = -84.4111352;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Río San Juan");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;

      case 17:
        lat = 11.4398929;
        long = -85.82809479;
  
        // Abrimos el diálogo y pasamos los datos
        dialogref = this.dialog.open(ViewmapaComponent, {
          height: '900px',
          minWidth: '900px',
          data: { lat, long }
        });
  
        console.log("Rivas");
        
        // Esperamos a que el diálogo se abra completamente para cargar el mapa
        dialogref.afterOpened().subscribe(() => {
          dialogref.componentInstance.initMap(lat, long); // Llamamos a la función para inicializar el mapa
        });
        break;
  
      default:
        dialogref = this.dialog.open(ViewmapaComponent);
        break;
    }
  }
  
  
}
