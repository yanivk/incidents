import { Component } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  id: number | null = null;

  incidentForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    requesterDetails: new FormControl(''),
  })

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params)
        this.id = +(params.get('id') ?? 0);
    });
  }

  handleSubmit() {
    alert(
      this.incidentForm.value.title + ' | ' + this.incidentForm.value.description
    );
  }
}
