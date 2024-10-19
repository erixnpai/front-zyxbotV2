import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {

  constructor(private http: HttpClient) { }


  getToken(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/autentification', data).pipe(catchError((error) => {
      throw new Error('Error al autenticar con Google');
    }));
  }
}
