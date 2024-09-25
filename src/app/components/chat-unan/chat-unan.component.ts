import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { toast } from 'ngx-sonner';
import { AuthStateService } from '../../services/data-access/auth-state.service';
import { LoginService } from '../../services/login/auth.service';
import { ChatService } from '../../services/chatservices/chat.service';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  text: string;
  isUser: boolean; // true si el mensaje es del usuario, false si es del servidor
}

@Component({
  selector: 'app-chat-unan',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './chat-unan.component.html',
  styleUrl: './chat-unan.component.css',
})
export default class ChatUnanComponent {
  userPhotoURL: string | null = null;
  user: string | null = null;
  message: string = '';
  messages: any[] = [];
  resp: any;

  private _auth = inject(AuthStateService);

  constructor(
    public srvAuth: LoginService,
    private router: Router,
    private srvchat: ChatService
  ) {
    this.CargardatoUser();
  }

  ngOnInit(): void {
    // Suscribirse a los mensajes del servidor
    this.srvchat.getMessage().subscribe((message: any) => {
      console.log(message);

      this.resp += message.message;

      console.log(this.resp);

      if ((message.end == true)) {
        console.log("finaaaaaaaaaaaal");
        
        // this.messages.push({ text: this.resp, isUser: false });
        this.resp = '';
      }

      // this.messages.push({ text: this.resp, isUser: false }); // Añade la respuesta del servidor

      this.messages[this.messages.length - 1] = { text: this.resp, isUser: false };
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      // Agregar mensaje del usuario al array de mensajes antes de enviarlo
      this.messages.push({ text: this.message, isUser: true });
      // Envía el mensaje al servidor
      this.srvchat.sendMessage(this.message);
      this.message = ''; // Limpiar el input
    }
  }

  async CargardatoUser() {
    try {
      this.userPhotoURL = this.srvAuth.getUserPhotoURL();
      this.user = this.srvAuth.getUser();
      console.log('Imagen del usuario', this.userPhotoURL);
    } catch (error) {
      toast.error('Error al cargar usuario con Google');
    }
  }
}
