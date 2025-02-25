import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {Router} from "@angular/router";
import {IncidentInterface} from "../../interfaces/incident-interface";
import {IncidentService} from "../../services/incident.service";

@Component({
  selector: 'app-incident',
  imports: [
    CardComponent
  ],
  templateUrl: './incident.component.html',
  styleUrl: './incident.component.css'
})
export class IncidentComponent {
  listIncidents: IncidentInterface[] = [];

  constructor(private router: Router, private incidentService: IncidentService) { }

  btnClick= () => {
    this.router.navigateByUrl('/incidents/incident');
  };

  ngOnInit() {
    this.incidentService.getIncidents().subscribe({
      next: data => {this.listIncidents = data},
      error: err => {console.error(err)},
      complete: () => {console.log("complete")}
    })
  }
}
