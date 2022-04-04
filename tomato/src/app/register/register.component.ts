import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
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
  

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    this.customer = this._formBuilder.group({
      address: ['', Validators.required],
    });
    this.delivery = this._formBuilder.group({
      vaccine_status: ['', Validators.required],
    });
    this.restaurant = this._formBuilder.group({
      overall_discount: ['', Validators.required],
      max_safety: ['', Validators.required],
      open_time: ['', Validators.required],
      close_time: ['', Validators.required],
    });
    this.user = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
    });
  }

  Submit(){

  }

  checkCommonForm() {
    if (this.username == "" || this.password == "") {
      this.filledfirst = false;
    } else {
      this.filledfirst = true;
    }
    this.isCompleted1 = this.filledfirst;
  }

  checkSpecificForm() {
    if (this.is_cust) {
      if (this.cust_mobile < 6000000000 || this.cust_mobile > 9999999999) {
        this.filledsecond = false;
      } else if (this.cust_address == "") {
        this.filledsecond = false;
      } else {
        this.filledsecond = true;
      }
    } 
    else if (this.is_rest) {
      if (this.rest_name == "" || this.rest_address == "") this.filledsecond = false;
      else if (this.rest_mobile < 6000000000 || this.rest_mobile > 9999999999) {
        this.filledsecond = false;
      } 
      else if (this.open_time == "" || this.close_time == "") this.filledsecond = false;
      else if (this.avg_cost_for_two == 0) this.filledsecond = false;
      else this.filledsecond = true;
    } 
    else if (this.is_del) {
      if (this.del_mobile < 6000000000 || this.del_mobile > 9999999999) this.filledsecond = false;
      else this.filledsecond = true;
    }
    this.isCompleted2 = this.filledsecond;
  }

  logMessage() {
    console.log("Username: ", this.username);
    console.log("Password: ", this.password);
  }

  setCustomer() {
    console.log("Setting customer");
    this.isCompleted0 = this.is_cust = true;
    this.is_rest = this.is_del = false;
  }

  setRestaurant() {
    console.log("Setting restaurant");
    this.isCompleted0 = this.is_rest = true;
    this.is_cust = this.is_del = false;
  }

  setDelivery() {
    console.log("Setting Delivery");
    this.isCompleted0 = this.is_del = true;
    this.is_rest = this.is_cust = false;
  }

}
