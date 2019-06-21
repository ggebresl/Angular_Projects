import { Component, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-day-eight',
  templateUrl: './day-eight.component.html',
  styleUrls: ['./day-eight.component.css']
})
export class DayEightComponent implements OnInit {

   title="Welcome to day-eight tutorial";
    toggle=true;
    format:string;
    months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

   employeeData=[{
      name:'John',
      age:30,
      salary:30000,
      DOB:new Date(1980,3,5),
      DOJ:new Date(2019, 8,20),
      currentTime: new Date()
   },
   {
    name:'Micheal',
    age:50,
    salary:100000,
    DOB:new Date(1969,5,14),
    DOJ:new Date(2019, 9,20),
    currentTime: new Date()
 },
 {
  name:'Katherine',
  age:25,
  salary:60000,
  DOB:new Date(1994,7,25),
  DOJ:new Date(2019, 10,20),
  currentTime: new Date()
},
{
  name:'Peter',
  age:40,
  salary:70000,
  DOB:new Date(1979,8,30),
  DOJ:new Date(2019, 11,20),
  currentTime: new Date()
},
{
  name:'Josh',
  age:28,
  salary:70000,
  DOB:new Date(1991,11,1),
  DOJ:new Date(2019, 12,20),
  currentTime: new Date()
}];
  constructor() { }

  ngOnInit() {
  }

  toggleDOB(){
    this.format = (this.toggle)?'fullDate':'shortDate';
    this.toggle=!this.toggle;
  }
}

