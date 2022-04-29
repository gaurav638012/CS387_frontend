import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { UserService } from '../services/user.service';
import { genUser } from '../_models/genUser';
import { Customer } from '../_models/customer';
import { tap, catchError, first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

const mobile_number = /^(\+\d{1,3}[- ]?)?\d{10}$/;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public username: string = "";
  public password: string = "";

  public filledfirst = false;
  public filledsecond = false;

  public is_cust = false;
  public is_rest = false;
  public is_del = false;

  // Customer
  public cust_mobile = 0;
  public cust_email = "";
  public cust_address = "";

  // Restaurant
  public rest_name = "";
  public rest_mobile = 0;
  public rest_email = "";
  public rest_address = "";
  public open_time = "";
  public close_time = "";
  public avg_cost_for_two = 0;

  // Delivery
  public del_mobile = 0;
  public del_email = "";

  public isCompleted0 = false;
  public isCompleted1 = false;
  public isCompleted2 = false;

  public type:any;
  public customer: any;
  public delivery: any;
  public restaurant:any;
  public user:any;
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;


  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      role: ['', Validators.pattern(/customer|delivery|restaurant/i)],
    });
    this.secondFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.customer = this._formBuilder.group({
      mobile : ['' ,[Validators.required, Validators.min(6000000000), Validators.max(9999999999)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
    this.restaurant = this._formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      covid_safety: ['', Validators.required], 
      overall_discount: ['', Validators.required], 
      open_time: ['', Validators.required],
      close_time: ['', Validators.required], 
      avg_cost_for_two: ['', Validators.required], 
    });
    this.delivery = this._formBuilder.group({
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      doses: ['', Validators.required],
    });
  }

  Submit(){
    console.log("Called")
    if (this.firstFormGroup.invalid || 
        this.secondFormGroup.invalid ||
        (this.is_cust && this.customer.invalid) || 
        (this.is_rest && this.restaurant.invalid) || 
        (this.is_del && this.delivery.invalid) ) {
          return;
    } 

    console.log("Called",this.firstFormGroup.value,this.secondFormGroup.value);

    if (this.is_cust) {
      console.log("Customer");
      let c = {
        username : this.secondFormGroup.controls["username"].value,
        password : this.secondFormGroup.controls["password"].value,
        mobile: this.customer.controls["mobile"].value,
        email: this.customer.controls["email"].value,
        address: "84, Near Honda Showroom, Adchini, New Delhi",
        latitude: 28.53538174,
        longitude: 77.19692286
      }
      this.userService.register_customer(c).pipe( first())
      .subscribe(
      data => {console.log(data),this.router.navigate(["/login"])},
      error => {console.log(error)}
      )
    } else if (this.is_rest) {
      console.log("Restaurant");
      let c = {
        username : this.secondFormGroup.controls["username"].value,
        password : this.secondFormGroup.controls["password"].value,
        restaurant_name: this.restaurant.controls["name"].value,
        mobile: this.restaurant.controls["mobile"].value,
        email: this.restaurant.controls["email"].value,
        address: "84, Near Honda Showroom, Adchini, New Delhi",
        latitude: 28.53538174,
        longitude: 77.19692286,
        max_safety_follow: this.restaurant.controls["covid_safety"].value,
        overall_discount: this.restaurant.controls["overall_discount"].value,
        open_time: this.restaurant.controls["open_time"].value,
        close_time: this.restaurant.controls["close_time"].value,
        avg_cost_for_two: this.restaurant.controls["avg_cost_for_two"].value
      }
      this.userService.register_restaurant(c).pipe( first())
      .subscribe(
      data => {console.log(data),this.router.navigate(["/login"])},
      error => {console.log(error)}
      )
    } else if (this.is_del) {
      console.log("Delivery");
      let c = {
        username : this.secondFormGroup.controls["username"].value,
        password : this.secondFormGroup.controls["password"].value,
        mobile: this.delivery.controls["mobile"].value,
        email: this.delivery.controls["email"].value,
        vaccination_status: this.delivery.controls["doses"].value
      }
      this.userService.register_delivery(c).pipe( first())
      .subscribe(
      data => {console.log(data),this.router.navigate(["/login"])},
      error => {console.log(error)}
      )
    } else {
      this.router.navigate(["/register"]);
    }
  }

  setRole() {
    switch (this.firstFormGroup.controls["role"].value.toLowerCase()) {
      case "customer":
        this.is_cust = true;
        break;
      case "restaurant":
        this.is_rest = true;
        break;
      case "delivery":
        this.is_del = true;
        break;
      default:
        break;
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}