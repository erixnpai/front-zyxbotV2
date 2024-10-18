import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socketServer: any;

  // server = io('http://localhost:3000/ollama', { autoConnect: false });

  constructor() {

  }

  connectToServer(url: string) {
    this.socketServer = io('http://localhost:3000/ollama' + url, { autoConnect: false });
    this.socketServer.on('connect', () => { 
      console.log('Conectado al servidor');
    });
    this.socketServer.connect();

  }

  sendMessage(msg: string) {
    this.socketServer.emit('chat', msg);
  }

  getMessage(): Observable<any> {
    return new Observable(observer => {
      this.socketServer.on('chat_response', (data: any) => {
        observer.next(data);
      });
    });
  }

}
