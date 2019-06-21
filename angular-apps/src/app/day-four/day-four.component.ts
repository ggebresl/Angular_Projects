import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PlayerDataService } from './player-data.service';
import { ComputerLanguageService } from './computer-language.service'
import { Player,UserDetails,ComputerLanguages } from './player'
import { Observable } from 'rxjs/Rx';
import { Data } from '../data'
import { of } from 'rxjs/observable/of';
@Component({
  selector: 'app-day-four',
  templateUrl: './day-four.component.html',
  styleUrls: ['./day-four.component.css'],
  providers: [PlayerDataService, ComputerLanguageService]
})
export class DayFourComponent implements OnInit, AfterViewInit {

  playersList1: Player[];
  playersList2: Player[] = [];
  playersList3: Player[];
  languagesData: ComputerLanguages[];
  username: string;
  password: string;
  usersData: UserDetails;

  private values: Array<Number> = [];
  private anyErrors: boolean;
  private finished: boolean;
  private myObservable = of(1, 2, 3);

  private myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  constructor(private service: PlayerDataService, private service2: ComputerLanguageService, private storeData: Data) { }
  private sub: any;
  ngOnInit() {
    //    this.getPlayersDirectly();
    //  this.getPlayerFromJson();
    //this.getComputerLanguageDetails();

  console.log('Day-four component is reached.');
  }


  ngAfterViewInit() {
    //this.getPlayerFromJsonForDirectSubscribemethod();
  }

  /*
  --------------------------PROMISE BEGIN HERE------------------------------------------------------------------------------------------------------------
  */
  getPlayersList() {
    this.service.returnPromise().then((data: any) => {
      console.log(data);
      let dataArr = data.json();

      dataArr.forEach(element => {
        this.playersList2.push(element);
      });
    },
      (error) => {
        console.log("Http call has been failed with error:\t" + error);
      });
    console.log(this.playersList2);
  }


  executeCallbackAsynchronously(callback) {
    setTimeout(() => {
      console.log("Calling Asynchronously");
      callback();
    }, 3000);
  }

  callBackDemo() {
    this.executeCallbackAsynchronously(() => console.log("Callback Called"));
    console.log("Asynchronous Callback call is sent");
  }


  asynchronousCallUsingPromise() {
    var promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log("calling asynchronously");
        resolve();
      }, 3000);
    });
    return promise;
  }

  AnotherWayOfAsynchronusCallUsingPromise(error) {

    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("calling asynchronously")
        if (error) {
          reject("Rejected");
        } else {
          resolve("Success");
        }

      }, 3000);
    });
    return promise;
  }

  callPromiseForCallback(error) {
    this.AnotherWayOfAsynchronusCallUsingPromise(error).then((res) => console.log("Promise is success with:"+res), (err) => console.log('Promise is failed with :'+err));
    console.log("Asynchronous Callback call is sent")
  }

  callPromiseForSuccess() {
    this.asynchronousCallUsingPromise();/*.then(() => console.log("Promise is complete."));*/
    console.log("Asynchronous Callback call is sent")
  }

  imediateResolve() {
    let promise = Promise.resolve('done');
    promise.then((val) => console.log(val))
  }

  imediateReject() {
    let promise = Promise.reject('Failed');

    promise.then((val) => { console.log('Success Caught'); },
      (err) => console.log("Error caught"));
  }

  chainingInPromiseResolve() {
    Promise.resolve("success")
      .then(
        (val) => {
          console.log(val);
          return 'returnVal';
        },
        (err) => console.error(err)
      )
      .then(
        (val) => console.log('Success' + val),
        (err) => console.log('Failed' + err)
      );
  }

  chainingInPromiseReject() {
    Promise.reject("Failure")
      .then(
        (val) => {
          console.log(val);
          return 'returnVal';
        }
      )
      .then(
        (val) => console.log('Success value=' + val),
        (err) => console.error(' Failed Value = ' + err)
      );
  }

  ChainingInPromiseWithError() {
    Promise.resolve('done')
      .then((val) => {
        throw new Error("fail")
      })
      .then(
        (val) => console.log(val),
        (err) => console.error(err)
      );
  }

  PromiseWithCatch() {
    Promise.resolve('done')
      .then((val) => { throw new Error("fail") })
      .then((val) => console.log(val))
      .catch((err) => console.error(err));
  }

  /*
  --------------OBSERVABLE BEGINS HERE------------------------------------------------------------------------------
  
  */


  SimpleObservableCall(){
    this.myObservable.subscribe(this.myObserver);
  }
  getObservableData(): Observable<number> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(42);
      }, 1000);

      setTimeout(() => {
        observer.next(43);
      }, 2000);

      setTimeout(() => {
        observer.next(44);
      }, 3000);

      setTimeout(() => {
        observer.next(45);
      }, 4000);

      setTimeout(() => {
        observer.next(46);
      }, 5000);

      setTimeout(() => {
        observer.complete();
      }, 6000);
    });
  }


  subscribeToObservable() {
    this.getObservableData().subscribe(value => {
      console.log(value);
      this.values.push(value);
    })
  }
  subscribeToObservaleUsingForEach(){
    this.getObservableData().forEach(value=>{
      console.log(value);
      this.values.push(value);
    });
  }

  getComputerLanguageDetails() {
    this.service2.getLanguages().subscribe(data => {
      this.languagesData = data;
    });
  }
  getPlayersDirectly() {
    this.playersList1 = this.service.getPlayers();
  }


  getPlayerFromJson() {
    this.sub = this.getPlayersFromJsonFile().subscribe(val => {
      console.log(this.playersList2)
    },
    err=>console.log('Call Failed with:'+err));
  }

  getPlayerFromJsonForDirectSubscribemethod() {
    this.service.getPlayersFromJsonUsingHttp().subscribe(value => {
      this.playersList3 = value;
    });
  }

  getPlayersFromJsonFile(): Observable<any> {
    return this.service
      .getPlayersFromJsonUsingHttp().
      map(
        (content) => {
          this.playersList2 = content;
        }).retryWhen((errors)=>errors.delay(3000).take(3).concat(Observable.throw('Error occured after multiple retries.')))
      .catch((error) => {
        console.log('error Description: ' + error);
        throw error;
      });
  }

  signIn() {
    this.service2.userLogin(this.username,this.password).map((content)=>{
      //this.storeData.storage = content;
      console.log(content);
      return content;
    }).subscribe(val => {
        console.log('val='+val);
        this.usersData  =val;
        console.log(this.usersData);
      this.storeData.storage = this.usersData; //Write in providers data
    });
  }


  updateUserName(){
    this.service2.updateUser(this.username).subscribe(res=>{
      console.log(res);
    });
  }

  deleteUserName(){
    this.service2.deleteUser(this.username).subscribe(res=>{
      console.log(res);
    })
  }


  ngOnDestroy() {
    console.log('From destroy method');
    //this.sub.unsubscribe();
  }
}
