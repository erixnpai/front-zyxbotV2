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


  historyChat: any;

  private _auth = inject(AuthStateService);

  constructor(
    public srvAuth: LoginService,
    private router: Router,
    private srvchat: ChatService
  ) {
    srvchat.connectToServer("");
    this.CargardatoUser();
  }

  ngOnInit(): void {
    // Suscribirse a los mensajes del servidor
    this.srvchat.getMessage().subscribe((message: any) => {
      let mess = message.message;
      console.log(mess);

      // Verificar el último elemento del arreglo de mensajes
      if (this.messages.length > 0) {
        let lastMessage = this.messages[this.messages.length - 1];

        console.log(" el ultimo mensaje?", lastMessage);
        

        if (lastMessage.isUser) {

          this.messages.push({ text: this.message, isUser: false });

          console.log("entro?");
          // Si el último mensaje es de un usuario, agregar un nuevo mensaje
          this.messages[this.messages.length - 1].text += mess;
        } else {
          // Si el último mensaje es del servidor, agregar un nuevo mensaje
          this.messages[this.messages.length - 1].text += mess;
        }
      } 

      console.log(this.messages);
      
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
