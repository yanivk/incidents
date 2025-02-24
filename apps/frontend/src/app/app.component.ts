import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from "./components/menu/menu.component";
import {StatisticComponent} from "./components/statistic/statistic.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, StatisticComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
