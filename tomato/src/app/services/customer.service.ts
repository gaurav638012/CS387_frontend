import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../_models/address';
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

  add_address(user: Address): Observable<Address>
  {
    return this.http.post<Address>("/api/customer/address/add", user, httpOptions);
  }

  delete_address(user: Address): Observable<Address>
  {
    return this.http.post<Address>("/api/customer/address/delete", user, httpOptions);
  }

  update_address(user: Address): Observable<Address>
  {
    return this.http.post<Address>("/api/customer/address/update", user, httpOptions);
  }

  get_addresses() : Observable<Address[]> {
    return this.http.get<Address[]>("/api/customer/addresses", httpOptions);
  }

}
