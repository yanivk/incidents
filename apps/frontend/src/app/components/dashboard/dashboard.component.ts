import { Component } from '@angular/core';
import {StatisticComponent} from "../statistic/statistic.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    StatisticComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
