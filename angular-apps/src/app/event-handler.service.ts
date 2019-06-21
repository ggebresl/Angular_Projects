import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EventHandlerService {

  event:Subject<any> = new Subject<any>();
  constructor() { }

  setMessage(message){
    this.event.next(message);
  }

  getMessage():Observable<any>{
    return this.event.asObservable();
  }
}
