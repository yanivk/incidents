import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-incident',
  imports: [
    CardComponent
  ],
  templateUrl: './incident.component.html',
  styleUrl: './incident.component.css'
})
export class IncidentComponent {

  constructor(private router: Router) { }

  btnClick= () => {
    this.router.navigateByUrl('/incidents/incident');
  };
}
