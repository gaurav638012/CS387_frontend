import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
    'Content-Type': 'application/json',
  })
  
};
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  get_Rest_list(latitude:any,longitude:any){
    
    return this.http.get(`/api/customer/restaurant_list?latitude=${latitude}&longitude=${longitude}`,httpOptions)
  }
}
