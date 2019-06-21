import{Injectable} from '@angular/core';

@Injectable(/*{
    provideIn:'root',  //this is angular-6 feature
  }*/)
export class Data {
    public storage:any;

    public constructor(){

    }
}
