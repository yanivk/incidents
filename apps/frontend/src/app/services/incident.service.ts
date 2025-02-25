import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IncidentInterface} from "../interfaces/incident-interface";
import {environment} from "../../environments/environment";

type dailyType = {
  incidents: IncidentInterface[]
  count: number
}

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http: HttpClient) {}

  getOneIncident(id: number): Observable<IncidentInterface> {
    return this.http.get<IncidentInterface>(`${environment.apiUrl}/api/incidents/${id}`);
  }

  getIncidents(): Observable<IncidentInterface[]> {
    return this.http.get<IncidentInterface[]>(`${environment.apiUrl}/api/incidents`);
  }

  setIncident(payload: Partial<IncidentInterface>): Observable<IncidentInterface> {
    return this.http.post<IncidentInterface>(`${environment.apiUrl}/api/incidents`, payload);
  }

  updateIncident(payload: Partial<IncidentInterface>): Observable<string> {
    return this.http.put<string>(`${environment.apiUrl}/api/incidents/${payload.id}`, payload);
  }

  getOpenedIncidents(): Observable<number>{
    return this.http.get<number>(`${environment.apiUrl}/api/statistics/total-open`);
  }
  getClosedIncidents(): Observable<number>{
    return this.http.get<number>(`${environment.apiUrl}/api/statistics/total-closed`);
  }
  getDailyIncidents(): Observable<dailyType>{
    return this.http.get<dailyType>(`${environment.apiUrl}/api/statistics/total-daily`);
  }
}
