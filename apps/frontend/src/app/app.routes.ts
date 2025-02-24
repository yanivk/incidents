import { Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {IncidentComponent} from "./components/incident/incident.component";
import {FormComponent} from "./components/incident/form/form.component";

export const routes: Routes = [
  {path: "", component: DashboardComponent},
  {path: "incidents", component: IncidentComponent},
  {path: "incidents/incident", component: FormComponent},
  {path: "incidents/incident/:id", component: FormComponent}
];
