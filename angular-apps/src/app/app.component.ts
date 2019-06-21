import { Component } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<!--The content below is only a placeholder and can be replaced.-->
  // <div style="text-align:center">
  //   <h1>
  //     Welcome to {{ title }}!
  //   </h1>
  //   <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
  // </div>
  // <app-day-one></app-day-one> 
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial';

  firstName:string;
  lastName:string;
  data:any;

  constructor(private router: Router){

  }
  displayCounter(count) {
    alert(count);
}

receiveFromChild(data){
  this.firstName = data.firstName;
  this.lastName = data.lastName;
}

sendToChild(){
//this.data = {firstName:this.firstName,lastName:this.lastName}
this.data={firstName:'Vinay', age:30};
}

goToDayFour(){
  this.router.navigateByUrl('/dayFour');
}

goTODaySix(){
  this.router.navigateByUrl('/daySix/'+'Welcome to Day Six !');
}

goToDaySeven(){
  let extras:NavigationExtras={
    queryParams :{
    'employeeId':32,
    'employeeName':'Gary'
    }
  }
  this.router.navigate(['/daySeven'],extras);
}
}
