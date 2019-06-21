import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from '../event-handler.service';

@Component({
  selector: 'app-day-ten',
  templateUrl: './day-ten.component.html',
  styleUrls: ['./day-ten.component.css']
})
export class DayTenComponent implements OnInit {
  counter :number= 1;
  constructor(private eventHandler:EventHandlerService) { }

  ngOnInit() {
  }


  emitMessage(){
    this.eventHandler.setMessage("Greeting no:"+this.counter+" from day-ten! :)");
    this.counter++;
  }

}
