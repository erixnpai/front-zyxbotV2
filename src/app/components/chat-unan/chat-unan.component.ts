import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chat-unan',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './chat-unan.component.html',
  styleUrl: './chat-unan.component.css'
})
export default class ChatUnanComponent {

}
