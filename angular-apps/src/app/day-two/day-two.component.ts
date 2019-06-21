import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {User} from './user'
@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css']
})
export class DayTwoComponent implements OnInit {
  countryList:string []=['America','India', 'Russia', 'China'];
  userForm: FormGroup;
  firstName:FormControl;
  lastName:FormControl;
  email:FormControl;
  phoneNumber:FormControl;
  country:FormControl;
  userDetails :User=new User();
  constructor() { }

  ngOnInit() {
    this.initFormControls();
    this.initForm();
  }

  onSubmit(user:any) {
      console.log(user);
      user.name.firstname = 'Gary'; 
      console.log('Changed Form:'+user);
  }

  onSubmitTwoWayBinding(userDetails:User) {
    console.log("User Details:"+ userDetails);
    userDetails.firstName='Text2';
  }
  onModelDrivenSubmit(user:any) {
      console.log(user);
      this.userForm.reset();

  }

  initFormControls(){
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.country = new FormControl("", Validators.required);
    this.phoneNumber=new FormControl("", [Validators.required, Validators.minLength(10),Validators.maxLength(10), Validators.pattern('^(0|[1-9][0-9]*)$')])
  }

  initForm(){
    this.userForm = new FormGroup({
        name: new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName
        }),
      email:this.email,
      country:this.country,
      phoneNumber:this.phoneNumber
    });
  }
}
