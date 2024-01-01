import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPolicyService 
{

  constructor(private http:HttpClient) { }
  baseURL:string = 'http://localhost:8585/api/v1/';

  getUserPolicyByUserId(userId:any)
  {
    let tokenString = "Bearer "+localStorage.getItem("token");
    const headers =  new HttpHeaders().set("Authorization",tokenString);
    return this.http.get(this.baseURL+"userpolicies/get/userId/"+userId,{headers,responseType:'json'});

  }
  deleteUserPolicy(policyNo:any)
  {
    let tokenString = "Bearer "+localStorage.getItem("token");
    const headers =  new HttpHeaders().set("Authorization",tokenString);
    return this.http.delete(this.baseURL+"userpolicies/delete/"+policyNo,{headers,responseType:'json'});
    
  }
  getAllUserPolicies()
  {
    let tokenString = "Bearer "+localStorage.getItem("token");
    const headers =  new HttpHeaders().set("Authorization",tokenString);
    return this.http.get(this.baseURL+"userpolicies/getall",{headers,responseType:'json'});

  }
}
