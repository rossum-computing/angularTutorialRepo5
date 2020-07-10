import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-profile',
  templateUrl: './template-profile.component.html',
  styleUrls: ['./template-profile.component.scss']
})
export class TemplateProfileComponent implements OnInit {
  firstName = "John"
  lastName = "Doe"
  phone = "9898989898"
  email = "john@gmail.com"
  flag = true;


  constructor() { }

  ngOnInit() {
  }
  formEdit() {
    if (this.flag == true) {
      this.flag = false
    }
    else {
      this.flag = true
    }
  }
}
