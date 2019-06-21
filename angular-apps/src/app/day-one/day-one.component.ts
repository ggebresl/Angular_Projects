import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  //  template: `<div style="text-align:center">
  // <h1>This is template url</h1>
  // </div>`, 
  styleUrls: ['./day-one.component.css']
})
export class DayOneComponent implements OnInit {
    text='Iam one way binding';
    name:string;
    OrgName=new FormControl('');
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  display(){
    alert(this.name);
  }

  getVal(){

    return "Apple";
  }

  onKey(event: any) { // without type info
    
      this.name = event.target.value;
      /*if(this.name != undefined){
        this.name +="S" ;
      }*/
      
    }


  displayOrg(){
    alert(this.OrgName.value);
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
