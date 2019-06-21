import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-day-six',
  templateUrl: './day-six.component.html',
  styleUrls: ['./day-six.component.css']
})
export class DaySixComponent implements OnInit {
  value:number;
  welcomeMessage:string;
  userId:number;
  constructor(private route :ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.welcomeMessage = params['welcomeMessage'];
      this.userId = params['userId'];
  });

  this.switchMapDemo();
  }

  switchMapDemo(){
    var button = document.getElementById('switchMapDemoButton');
    var obs1 =fromEvent(button, 'click');

    var obs2  =interval(1000);


    /*obs1.subscribe((event)=>{
      obs2.subscribe((value)=>{
        console.log(value);
        this.value = value;
      });
    });*/  // This approach is not good when you have multiple or dependent http requests.

      obs1.switchMap(event=>{
        return obs2;
      }).subscribe((value)=> {
        console.log(value);
        this.value = value});

  }

  demoForSomeOperators(){
    let  matrix = [[1,2,3],[4,5,6]];
    console.log(matrix.flat());
    console.log(matrix.flat(1));
    let matrix2=[['I'],['learn',[[[[[['Angular']]]]]]]]
    console.log(matrix2.flat(Infinity));

    let myString = matrix2.flat(Infinity).reduce((a,v)=>a+v);
    console.log('myString:'+myString);
    let matrix3 = [[1], [2,[3,[4,[5]]]]];
    console.log(matrix3.flat(Infinity));
    let total = matrix3.flat(Infinity).reduce((accumulator,value)=> accumulator+value);
    console.log('total:'+total);

    let matrix4 = ['I','Want','to'];
    let matrix5 = ['learn','Angular', 'thoroughly'];

    let mappedMatrix = matrix4.map((value, index)=>[value, matrix5[index]]);
    console.log('mappedMatrix: '+mappedMatrix);

    let flatMappedMatrix = matrix4.flatMap((value, index)=>[value, matrix5[index]]);
    console.log(flatMappedMatrix);

    console.log('rood:'+['r', 'o','o','d'].reduce((a,v)=>a+v));

    console.log('rood:'+['r', 'o','o','d'].reduceRight((a,v)=>a+v));

    console.log('rood:'+[1, 2,3,4].reduce((a,v)=>a+v));
    console.log('rood:'+[1, 2,3,4].reduceRight((a,v)=>a+v));
  }


  arrayFromMethod(){
    let simpleArr = Array.from({length:5});
    console.log(simpleArr.map((value, index)=> value));
    let complex = Array.from({length:5}, (v,i)=>v);
    console.log(complex);

    let arr = new Array(5);
      console.log(arr);

      arr.fill(0);
      console.log(arr);

      let dup = [1,2,2,4,3,5,6,6];
      let uniq = Array.from(new Set(dup));
      console.log(uniq);

      let func = function(...args){
        console.log(args);
      }

      func('A','n','g','u','l','a','r');



      let func2 = function(...args){
        console.log(Array.from(args).join(''));
      }

      func2('A','n','g','u','l','a','r');

  }
}
