import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-day-seven',
  templateUrl: './day-seven.component.html',
  styleUrls: ['./day-seven.component.css']
})
export class DaySevenComponent implements OnInit {
  @Input() daySevenData: any;
  name:string;
  age:number;

  constructor(private route :ActivatedRoute,private router: Router) { 
    console.log('constructor has been called')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy has been called.')
  }
  
  ngOnInit() {
    console.log('ngOnInit has been called.');

    this.name="Gary";
    this.age = 54;
    //console.log(this.route.snapshot.queryParamMap.get('employeeId'));
    //console.log(this.route.snapshot.queryParamMap.get('employeeName'));

    /*this.route.queryParams.subscribe(params=>{
      console.log(params);
      console.log(params.employeeId);
      console.log(params.employeeName);
    });*/

  }
  ngOnChanges(){
    console.log('ngOnChanges has been called.');
    if(this.daySevenData){
      console.log(" daySevenData: "+this.daySevenData);
      this.name = this.daySevenData.firstName;
    }
  }

  
  ngAfterContentInit(){
    console.log('ngAfterContentInit has been called.');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked has been called.');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked has been called');
  }

 ngAfterViewInit() {
      console.log("ngAfterViewInit is called");
  }

  ngDoCheck(){
    console.log('ngDoCheck has been called.');
  }

}
