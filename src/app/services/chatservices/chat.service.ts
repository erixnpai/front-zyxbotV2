import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService  {

  server = io('http://localhost:3000/ollama', { autoConnect: false });

  constructor() {
    this.server.on('connect', () => { // Cambiado a 'connect'
      console.log('Conectado al servidor');
    });
    this.server.connect();
  }

  sendMessage(msg: string) {
    this.server.emit('chat', msg);
  }

  getMessage(): Observable<any> {
    return new Observable(observer => {
      this.server.on('chat_response', (data: any) => {
        observer.next(data);
      });
    });
  }

}
