import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login/auth.service';
import { ChatService } from '../../services/chatservices/chat.service';
import { Router } from '@angular/router';
import { AuthStateService } from '../../services/data-access/auth-state.service';
import { toast } from 'ngx-sonner';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-uncsm',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './chat-uncsm.component.html',
  styleUrl: './chat-uncsm.component.css'
})
export default class ChatUncsmComponent {
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
    srvchat.connectToServer("/socket-uncsm");
    this.CargardatoUser();
  }

  ngOnInit(): void {
    // Suscribirse a los mensajes del servidor
    this.srvchat.getMessage().subscribe((message: any) => {
      let mess = message.message;
      mess = mess.replace(/\n/g, '<br>');
      mess = mess.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // // console.log(mess);

      // Verificar el último elemento del arreglo de mensajes
      if (this.messages.length > 0) {
        let lastMessage = this.messages[this.messages.length - 1];

     
        

        if (lastMessage.isUser) {

          this.messages.push({ text: this.message, isUser: false });

          // Si el último mensaje es de un usuario, agregar un nuevo mensaje
          this.messages[this.messages.length - 1].text += mess;
          this.messages[this.messages.length - 1].text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        } else {
          // Si el último mensaje es del servidor, agregar un nuevo mensaje
          this.messages[this.messages.length - 1].text += mess;
          this.messages[this.messages.length - 1].text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        }
      } 

      // console.log(this.messages);
      
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
