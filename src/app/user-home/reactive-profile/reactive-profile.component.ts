import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-profile',
  templateUrl: './reactive-profile.component.html',
  styleUrls: ['./reactive-profile.component.scss']
})
export class ReactiveProfileComponent implements OnInit {
  firstName = "John"
  lastName = "Doe"
  phone = "9898989898"
  email = "john@gmail.com"
  flag = true;
  valForm : FormGroup;


  constructor(fb : FormBuilder) {
    this.valForm = fb.group({
      'firstName': [this.firstName, Validators.required],
      'lastName': [this.lastName, Validators.required],
      'email': [this.email, Validators.required],
      'phone': [this.phone, Validators.required],

    })
   }

  ngOnInit() {
  }
  submitForm($ev, value:any) {
    console.log($ev)
    if (this.valForm.valid) {
      this.firstName = value.firstName;
      this.lastName = value.lastName;
      this.phone = value.phone;
      this.email = value.email;
      this.flag = true

    }
  }

  formEdit() {
    this.flag = false;
  }

}
