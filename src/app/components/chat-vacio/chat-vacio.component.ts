import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chat-vacio',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './chat-vacio.component.html',
  styleUrl: './chat-vacio.component.css'
})
export default class ChatVacioComponent {

}
