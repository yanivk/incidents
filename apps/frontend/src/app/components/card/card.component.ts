import {Component, input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [
    RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  id = input<number>(0);
  title = input<string>("");
  description = input<string>("");
  requesterDetails = input<string>("");
  status = input<string>("");
}
