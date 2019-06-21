import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from '../event-handler.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-day-eleven',
  templateUrl: './day-eleven.component.html',
  styleUrls: ['./day-eleven.component.css']
})
export class DayElevenComponent implements OnInit {

  message:string;
  Sub:any;
  bSub:BehaviorSubject<any> = new BehaviorSubject<any>("First Value");
  rSub:ReplaySubject<any> =new ReplaySubject<any>(2);
  constructor(private eventHandler:EventHandlerService) { 
    this.Sub = this.eventHandler.getMessage().subscribe((message) =>{
      this.message = message;
    });
  }

  ngOnInit() {
    
  }


  behaviourSubject(){
    this.bSub.next("second value");
    this.bSub.subscribe((value)=>{
      console.log(value);
    })
    this.bSub.next("third value");

    this.bSub.subscribe((value)=>{
      console.log(value);
    })
  }

  replaySubject(){
    this.rSub.next(10);
    this.rSub.next(11);
    this.rSub.next(12);
    this.rSub.next(13);

    this.rSub.subscribe((value)=>{
      console.log(value);
    })

    this.rSub.next(15);
    this.rSub.subscribe((value)=>{
      console.log(value);
    })

    this.rSub.next(16);
  }

}
