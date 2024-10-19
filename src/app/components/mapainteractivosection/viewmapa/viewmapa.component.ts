import { CommonModule, NgFor } from '@angular/common';
import { Component, Inject, InjectionToken } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as L from 'leaflet';

@Component({
  selector: 'app-viewmapa',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './viewmapa.component.html',
  styleUrl: './viewmapa.component.css'
})
export default class ViewmapaComponent {
  private map: L.Map | undefined;
  public form: FormGroup | undefined;


  // Arreglo de instituciones
  public instituciones = [
    { id: '0', nombre: 'Seleccione', siglas: 'CNU' },
    { id: '1', nombre: 'Consejo Nacional de Universidades', siglas: 'CNU' },
    { id: '2', nombre: 'Universidad Nacional Autónoma de Nicaragua, Managua', siglas: 'UNAN-Managua' },
    { id: '3', nombre: 'Universidad Nacional Autónoma de Nicaragua, León', siglas: 'UNAN-León' },
    { id: '4', nombre: 'Universidad Nacional Agraría', siglas: 'UNA' },
    { id: '5', nombre: 'Universidad Nacional de Ingeniería', siglas: 'UNI' },
    { id: '6', nombre: 'Universidad Internacional Antonio de Valdivieso', siglas: 'UNIAV' },
    { id: '7', nombre: 'Bluefields Indian & Caribbean University', siglas: 'BICU' },
    { id: '8', nombre: 'Universidad de las Regiones Autónomas de la Costa Caribe Nicaragüense', siglas: 'URACCAN' },
    { id: '9', nombre: 'Universidad Nacional Francisco Luis Espinoza Pineda', siglas: 'UNFLEP' },
    { id: '10', nombre: 'Universidad Nacional Politécnica', siglas: 'UNP' },
    { id: '11', nombre: 'Universidad Nacional Multidisciplinaria Ricardo Morales Avilés', siglas: 'UNM-RMA' },
    { id: '12', nombre: 'Universidad Americana', siglas: 'UAM' },
    { id: '13', nombre: 'Universidad Nicaragüense de Ciencia y Tecnología', siglas: 'UCYT' },
    { id: '14', nombre: 'Universidad de Managua', siglas: 'UdeM' },
    { id: '15', nombre: 'Universidad del Valle', siglas: 'UNIVALLE' },
    { id: '16', nombre: 'Universidad Jean Jacques Rousseau', siglas: 'UNIJJAR' },
    { id: '17', nombre: 'Universidad Católica "Redemptoris Mater"', siglas: 'UNICA' },
    { id: '18', nombre: 'Universidad Martín Lutero "Un Ministerio de las Asambleas de Dios"', siglas: 'UML' },
    { id: '19', nombre: 'Universidad de las Américas', siglas: 'ULAM' },
    { id: '20', nombre: 'Universidad Tecnológica La Salle', siglas: 'ULSA' },
    { id: '21', nombre: 'Keiser University', siglas: 'KULAC' },
    { id: '22', nombre: 'Universidad Iberoamericana de Ciencia y Tecnología', siglas: 'UNICIT' },
    { id: '23', nombre: 'Universidad de Tecnología y Comercio', siglas: 'UNITEC' },
    { id: '24', nombre: 'Universidad Thomas More', siglas: 'UTM' },
    { id: '25', nombre: 'Universidad de Defensa de Nicaragua "4 de Mayo"', siglas: 'UDENIC' },
    { id: '26', nombre: 'Universidad de Ciencias Comerciales', siglas: 'UCC' },
    { id: '27', nombre: 'Universidad de Ciencias Médicas', siglas: 'UCM' },
    { id: '28', nombre: 'Universidad de Chinandega', siglas: 'UACH' },
    { id: '29', nombre: 'Universidad de Ciencias Médicas y Enfermería "Dr. Julio Briceño Dávila" Hospital Escuela Carlos Roberto Huembes de la Policía Nacional', siglas: 'UCMEJBD' },
    { id: '30', nombre: 'Universidad de Ciencias Policiales "Leonel Rugama"', siglas: 'UCP-LR' },
    { id: '31', nombre: 'Universidad Nacional Comandante Padre Gaspar García Laviana', siglas: 'UNCPGGL' },
    { id: '32', nombre: 'Instituto de Estudio e Investigación Jurídica', siglas: 'INEJ' },
    { id: '33', nombre: 'Instituto Latinoamericano de Computación', siglas: 'ILCOMP' },
    { id: '34', nombre: 'Instituto de Altos Estudios Judiciales', siglas: 'IAEJ' },
    { id: '38', nombre: 'La American University', siglas: 'LAAU' },
    { id: '39', nombre: 'Universidad Anunciata', siglas: 'UA' },
    { id: '41', nombre: 'Universidad Central de Nicaragua', siglas: 'UCN' },
    { id: '43', nombre: 'Universidad Centroamericana de Ciencias Empresariales', siglas: 'UCEM' },
    { id: '46', nombre: 'Universidad de Medicina Oriental Japón - Nicaragua', siglas: 'UMO-JN' },
    { id: '50', nombre: 'Universidad Internacional para el Desarrollo Sostenible', siglas: 'UNIDES' },
    { id: '51', nombre: 'Universidad Técnica de Comercio', siglas: 'UTC' },
    { id: '52', nombre: 'Universidad Nacional Casimiro Sotelo Montenegro', siglas: 'UNCSM' },
    { id: '53', nombre: 'Universidad American College', siglas: 'UAC' },
  ];

  sedes = [
    { id: '0', idIES: '0', nombre: 'Seleccione' },
    { id: '1', idIES: '1', nombre: 'Consejo Nacional de Universidades', siglas: 'CNU', lat: 12.136, lng: -86.251 },
    { id: '2', idIES: '2', nombre: 'Universidad Nacional Autónoma de Nicaragua, Managua', siglas: 'UNAN-Managua', lat: 12.134, lng: -86.249 },
    { id: '3', idIES: '3', nombre: 'Universidad Nacional Autónoma de Nicaragua, León', siglas: 'UNAN-León', lat: 12.430, lng: -86.878 },
    { id: '4', idIES: '4', nombre: 'Universidad Nacional Agraría', siglas: 'UNA', lat: 12.136, lng: -86.254 },
    { id: '5', idIES: '5', nombre: 'Universidad Nacional de Ingeniería', siglas: 'UNI', lat: 12.145, lng: -86.242 },
    { id: '6', idIES: '6', nombre: 'Universidad Internacional Antonio de Valdivieso', siglas: 'UNIAV', lat: 12.133, lng: -86.257 },
    { id: '7', idIES: '7', nombre: 'Bluefields Indian & Caribbean University', siglas: 'BICU', lat: 12.009, lng: -83.767 },
    { id: '8', idIES: '8', nombre: 'Universidad de las Regiones Autónomas de la Costa Caribe Nicaragüense', siglas: 'URACCAN', lat: 12.007, lng: -83.779 },
    { id: '9', idIES: '9', nombre: 'Universidad Nacional Francisco Luis Espinoza Pineda', siglas: 'UNFLEP', lat: 12.161, lng: -86.097 },
    { id: '10', idIES: '10', nombre: 'Universidad Nacional Politécnica', siglas: 'UNP', lat: 12.128, lng: -86.258 },
    // Añadir el resto de instituciones con sus respectivas coordenadas
  ];

  filteredSedes = this.sedes;
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: { lat: number, long: number }, private dialogRef: MatDialogRef<ViewmapaComponent>, private fb: FormBuilder
) {
  this.form = this.fb.group({
    Apellidos: [''],
    Nombres: [''],
    Institucion: [''], // Campo para la institución
    Sede: [''], // Campo para la sede
  });

  // Escucha los cambios en la institución seleccionada
  this.form.get('Institucion')?.valueChanges.subscribe((selectedInstitutionId) => {
    this.filterSedes(selectedInstitutionId);
  });

    // Escucha los cambios en la sede seleccionada
    this.form.get('Sede')?.valueChanges.subscribe((selectedSedeId) => {
      this.centrarMapaEnSede(selectedSedeId);
    });
}



// Método para filtrar las sedes según la institución seleccionada
filterSedes(selectedInstitutionId: string): void {
  if (selectedInstitutionId) {
    this.filteredSedes = this.sedes.filter((sede) => sede.idIES === selectedInstitutionId);
  } else {
    this.filteredSedes = this.sedes; // Si no hay selección, muestra todas las sedes
  }
}

centrarMapaEnSede(selectedSedeId: string): void {
  const sede = this.sedes.find(sede => sede.id === selectedSedeId);
  if (sede && this.map && sede.lat !== undefined && sede.lng !== undefined) {
    this.map.setView([sede.lat, sede.lng], 14); // Centra el mapa en la sede seleccionada
    L.marker([sede.lat, sede.lng]).addTo(this.map).bindPopup(`<b>${sede.nombre}</b>`).openPopup(); // Agrega un marcador en la sede
  }
}

  // Hacemos pública esta función para llamarla desde el diálogo
  public initMap(lat: number, lng: number): void {
    const container = document.getElementById('map'); // Verifica si el contenedor existe
    if (container) {
      this.map = L.map('map', {
        center: [lat, lng], // Usa los parámetros de latitud y longitud
        zoom: 11
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

