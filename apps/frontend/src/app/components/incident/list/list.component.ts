import {Component, input} from '@angular/core';
import {IncidentInterface} from "../../../interfaces/incident-interface";

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  incidents = input<IncidentInterface[]>([])
  protected readonly Math = Math;
  protected readonly JSON = JSON;
}
