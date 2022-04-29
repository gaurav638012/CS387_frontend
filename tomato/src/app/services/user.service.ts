import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { genUser } from '../_models/genUser';
import { CustomerInput } from '../_models/customer';
import { Restaurant } from '../_models/restaurant';
import { Delivery } from '../_models/delivery';
import { ConstantPool } from '@angular/compiler';
const CUSTOMER_REGISTER_URL = '/api/customer/register';
const DELIVERY_REGISTER_URL = '/api/delivery/register';
const RESTAURANT_REGISTER_URL = '/api/restaurant/register';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient)
  {
    
  }
  /**
   * Makes a POST request to register a User Object in the dashboard
   * @param user User object to be registered
   */
  register_customer(user: CustomerInput): Observable<CustomerInput>
  {
    return this.http.post<CustomerInput>(CUSTOMER_REGISTER_URL, user, httpOptions);
  }

  register_delivery(user: Delivery): Observable<Delivery>
  {
    return this.http.post<Delivery>(DELIVERY_REGISTER_URL, user, httpOptions);
  }

  register_restaurant(user: Restaurant): Observable<Restaurant>
  {
    return this.http.post<Restaurant>(RESTAURANT_REGISTER_URL, user, httpOptions);
  }
} 
