import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest,HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { UserDetails } from './player';
import { RequestOptions } from '@angular/http';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable()
export class ComputerLanguageService {
  constructor(private http: HttpClient) { }
 
 
 
  userLogin(username:string,password:string):Observable<any>{
    let apiUrl='http://127.0.0.1:8080/critic/user/login';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    const formdata: FormData = new FormData();
    formdata.append('username', username);
    formdata.append('password',password);

  return this.http.post(apiUrl,formdata);
  }


  updateUser(username:string):Observable<any>{
    let apiUrl='http://127.0.0.1:8080/critic/user/updateUserName';
    let headerData = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params =new HttpParams();
    params.set('username',username);
    return this.http.put(apiUrl, {},{
      headers:headerData,
      params:{
        username:username
      }
    });
  }
  
  deleteUser(username:string):Observable<any>{
    let apiUrl='http://127.0.0.1:8080/critic/user/deleteUserName';
    let headerData = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = {
      headers: headerData,
      params:{
        'username':username
      }
    };
  return this.http.delete(apiUrl,options);
  }

  getLanguages():Observable<any>{
    let apiUrl='./assets/computer-language.json';
    return this.http.get(apiUrl)
      .map( (response: Response) => {
         return  response;
      }).retry(3).catch((err)=>{console.log('Error'+err) ;
      throw err;});
  }
}