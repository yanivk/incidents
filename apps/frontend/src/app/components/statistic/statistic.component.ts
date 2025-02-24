import { Component, input } from '@angular/core';

@Component({
  selector: 'app-statistic',
  imports: [],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css'
})
export class StatisticComponent {
  description = input<string>("");
  stat = input(0);
}
