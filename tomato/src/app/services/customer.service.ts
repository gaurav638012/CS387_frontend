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

export class CustomerService {

  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get('/api/customer/profile',httpOptions)
  }


}
