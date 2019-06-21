import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Data} from '../data'
import { Observable } from 'rxjs/Rx';
import { tap, filter, finalize} from "rxjs/operators";
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
@Component({
  selector: 'app-day-five',
  templateUrl: './day-five.component.html',
  styleUrls: ['./day-five.component.css']
})
export class DayFiveComponent implements OnInit {
  providersData:any;
  username:string;
  constructor(private route :ActivatedRoute,private router: Router, private storeData:Data) { 

  }

  ngOnInit() {
    this.route.paramMap.forEach(element=>{
        console.log('Passed:'+element.get('username'));
    });
    this.route.params.subscribe(params => {
      this.username = params['username'];
  });

  console.log('username='+this.username);

  console.log("Providers Data:"+this.storeData.storage);
  let userDetails= this.storeData.storage
  console.log(userDetails.username);
  console.log(userDetails.email);
  this.providersData = this.storeData.storage
}

demoForPipe(){
  let dummyObservable: Observable<number> = from([1, 2, 3, 4, 5]);
  dummyObservable.pipe(
    tap( n => console.log("I'm emitting this value:"+ n) ),
    finalize(()=>console.log("It is finished"))
  ).subscribe(el => console.log('after subscription:',el));
}

demoForSubscribe(){
  let dummyObservable: Observable<number> = from([1, 2, 3, 4, 5]);
  dummyObservable.subscribe( n=>{
    console.log("I'm emitting this value:",n);
  });
}

anotherDemoForPipe(){
  of(1, 2, 3, 4).pipe(
    tap(el => console.log("Process "+ el)),
    filter(n => n % 2 === 0)
  ).subscribe(el => console.log("Even number: "+ el)); 


  [1,2,3,4].filter(n => {
    if(n % 2 == 0){
      console.log(n)
    }
   } );

   console.log([1,2,3,4].filter(n => n % 2==0));
}
}
