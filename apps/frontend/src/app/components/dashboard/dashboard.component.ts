import { Component } from '@angular/core';
import {StatisticComponent} from "../statistic/statistic.component";
import {IncidentInterface} from "../../interfaces/incident-interface";
import {IncidentService} from "../../services/incident.service";
import {ListComponent} from "../incident/list/list.component";

type dailyType = {
  incidents: IncidentInterface[]
  count: number
}

@Component({
  selector: 'app-dashboard',
  imports: [
    StatisticComponent,
    ListComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  incidents: number = 0;
  closed: number = 0;
  daily: dailyType = { incidents: [], count: 0 };

  constructor(private serviceName: IncidentService) {}

  ngOnInit() {
    this.serviceName.getOpenedIncidents().subscribe({
      next: (data) => {
        this.incidents = data;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('complete')
      }
    })
    this.serviceName.getClosedIncidents().subscribe({
      next: (data) => {
        this.closed = data;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('complete')
      }
    })
    this.serviceName.getDailyIncidents().subscribe({
      next: (data) => {
        this.daily = data;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('complete')
      }
    })
  }

  protected readonly JSON = JSON;
}
