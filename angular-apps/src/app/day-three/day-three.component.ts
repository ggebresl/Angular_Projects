import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['./day-three.component.css']
})
export class DayThreeComponent implements OnInit, OnChanges {
  @Input() parentUserData: any;
  @Output() childUserData = new EventEmitter();
  firstName: string;
  lastName: string;
  cricket: string;
  players: any[] = [{
    "name": 'Sachin Tendulkar',
    "country": 'India',
    "game": 'Cricket'
  },
  {
    "name": "Ronaldhino",
    "country": "Brazil",
    "game": "Football"

  },
  {
    "name": 'Micheal Jordon',
    "country": "US",
    "game": "BasketBall"
  }
  ];

  constructor() { }

  ngOnInit() {
  }


  sendToParent() {
    this.childUserData.emit({ firstName: this.firstName, lastName: this.lastName });
  }

  ngOnChanges(): void {
    if (this.parentUserData != undefined) {
      this.firstName = this.parentUserData.firstName;
      this.lastName = this.parentUserData.lastName;
    }
  }


  changeInCollection(index, item){
      return item;
  }

  getAddedItem(){
    var newData = {
      "name": "Messy",
      "country": "Barcelona",
      "game": "Football"  
    };
    if(this.players.filter(x => x.name === newData.name).length == 0){
      this.players.push(newData);
    }
  }
}