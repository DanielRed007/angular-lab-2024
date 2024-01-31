import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent {
  title = 'FormArray Example in Angular Reactive forms';

  constructor(public fb: FormBuilder) {}

  registrationForm = this.fb.group({
    addDynamicElement: this.fb.array([]),
  });

  get addDynamicElement() {
    return this.registrationForm.get('addDynamicElement') as FormArray;
  }
  addItems() {
    this.addDynamicElement.push(this.fb.control(''));
  }

  onSubmit() {
    alert(JSON.stringify(this.registrationForm.value));
  }
}
