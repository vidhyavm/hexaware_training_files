import { Injectable } from '@angular/core';
import { Players } from '../model/players';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http:HttpClient) { }


  baseURL:string ='http://localhost:8282/api/players/';


  getAll():Observable<Players[]>{

    return this.http.get<Players[]>(this.baseURL+"getall");


}
  add(body:Players):Observable<Players>{

    console.log(body);

      return this.http.post<Players>(this.baseURL+"add",body);

  }
  delete(playerName:string,jerserNo:number):Observable<string>{

    return  this.http.delete<string>(this.baseURL+`delete/${jerserNo}/${playerName}`);

  }
  
}
