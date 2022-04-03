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

  public type:any;
  public customer: any;
  public delivery: any;
  public restaurant:any;
  public user:any;
  isLinear = false;
  firstFormGroup: any;
  secondFormGroup: any;
  public is_cust = true;
  public is_rest = false;
  public is_del = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
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

  changeClass(){
    if(this.type == "restaurant"){
      this.is_rest = true;
      this.is_cust = false;
      this.is_del = false;
    }
    else if(this.type == "delivery"){
      this.is_rest = false;
      this.is_cust = false;
      this.is_del = true;
    }
    else{
      this.is_rest = false;
      this.is_cust = true;
      this.is_del = false;
    }
  }

}
