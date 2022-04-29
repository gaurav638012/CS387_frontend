import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { genUser } from '../_models/genUser';
import { CustomerInput, CustomerUpdate } from '../_models/customer';
import { RestaurantInput, RestaurantUpdate } from '../_models/restaurant';
import { DeliveryInput, DeliveryUpdate } from '../_models/delivery';
import { ConstantPool } from '@angular/compiler';
const CUSTOMER_REGISTER_URL = '/api/customer/register';
const CUSTOMER_UPDATE_URL = '/api/customer/update';
const DELIVERY_REGISTER_URL = '/api/delivery/register';
const DELIVERY_UPDATE_URL = '/api/delivery/update';
const RESTAURANT_REGISTER_URL = '/api/restaurant/register';
const RESTAURANT_UPDATE_URL = '/api/restaurant/update-details'; 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${sessionStorage.getItem("token")}`,
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

  update_customer(user: CustomerUpdate): Observable<CustomerInput> {
    return this.http.post<CustomerInput>(CUSTOMER_UPDATE_URL, user, httpOptions);
  }

  register_delivery(user: DeliveryInput): Observable<DeliveryInput>
  {
    return this.http.post<DeliveryInput>(DELIVERY_REGISTER_URL, user, httpOptions);
  }

  update_delivery(user: DeliveryUpdate): Observable<DeliveryInput> {
    return this.http.post<DeliveryInput>(DELIVERY_UPDATE_URL, user, httpOptions);
  }

  register_restaurant(user: RestaurantInput): Observable<RestaurantInput>
  {
    return this.http.post<RestaurantInput>(RESTAURANT_REGISTER_URL, user, httpOptions);
  }

  update_restaurant(user: RestaurantUpdate): Observable<RestaurantInput> {
    return this.http.post<RestaurantInput>(RESTAURANT_UPDATE_URL, user, httpOptions);
  }
} 
