import { Component } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {IncidentService} from "../../../services/incident.service";
import {IncidentInterface} from "../../../interfaces/incident-interface";

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  id?: number = 0;

  incidentForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    requesterDetails: new FormControl('', Validators.required),
    status: new FormControl("opened", Validators.required)
  })

  constructor(private router: Router, private route: ActivatedRoute, private incidentService: IncidentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params) {
        this.id = +(params.get('id') ?? 0);

        if (this.id !== 0) {
          this.incidentService.getOneIncident(this.id).subscribe(incident => {
            this.incidentForm.setValue({
              title: incident.title,
              description: incident.description,
              requesterDetails: incident.requesterDetails,
              status: incident.status
            })
          })
        }
      }
    });


  }

  handleSubmit() {
    const payload: Partial<IncidentInterface> = {};

    if (this.incidentForm.value.description)
      payload.description = this.incidentForm.value.description;
    if (this.incidentForm.value.requesterDetails)
      payload.requesterDetails = this.incidentForm.value.requesterDetails;
    if (this.incidentForm.value.status)
      payload.status = this.incidentForm.value.status;

    if (this.id === 0) {
      if (this.incidentForm.value.title)
        payload.title = this.incidentForm.value.title;
      this.incidentService.setIncident(payload).subscribe()
    } else {
      payload.id = this.id;
      this.incidentService.updateIncident(payload).subscribe()
    }

    this.router.navigateByUrl('/incidents');
  }
}
