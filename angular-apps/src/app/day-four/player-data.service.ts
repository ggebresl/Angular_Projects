import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class PlayerDataService {

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
  
  constructor(private http:Http) { }



  returnPromise():Promise<any>{
    return this.http.get('../assets/players.json').toPromise();
    }


    getPlayers(){
      return this.players;
    }


    getPlayersFromJsonUsingHttp():Observable<any>{
      let apiUrl = './assets/players.json';
      return this.http.get(apiUrl)
      .map( (response: Response) => {
         return  response.json();
      });
    }

    getPlayersFromJsonUsingHttpClient():Observable<any>{
      let apiUrl = './assets/players.json';
      return this.http.get(apiUrl)
      .map( (response: Response) => {
         return  response.json();
      });
    }
}

