import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { genUser } from '../_models/genUser';
import { Customer } from '../_models/customer';
import { tap, catchError, first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  isCustomer = false;
  isRestaurant = false;
  isDelivery = false;

  updateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    if (sessionStorage.getItem('token')!==null && sessionStorage.getItem('token')!==undefined) {
      //console.log("what the fuck")
      let payload = JSON.parse( sessionStorage.getItem('payload') || '{}' );
      if(payload['role'] === 'CUSTOMER'){
        this.isCustomer = true;
      } else if(payload['role'] === 'RESTAURANT'){
        this.isRestaurant = true;
      } else if (payload["role"] === 'DELIVERY') {
        this.isDelivery = true;
      }
      // console.log(payload['role']);
    }
   }

  ngOnInit(): void {
    if (this.isRestaurant) {
      this.updateForm = this.formBuilder.group({
        name: ['', ],
        mobile: ['', ],
        email: ['', [Validators.email]],
        address: ['', ],
        covid_safety: ['', ], 
        overall_discount: ['', ], 
        open_time: ['', ],
        close_time: ['', ], 
        avg_cost_for_two: ['', ], 
      });
    } else if (this.isCustomer) {
      this.updateForm = this.formBuilder.group({
        mobile : ['' ,[Validators.min(6000000000), Validators.max(9999999999)]],
        email: ['', [Validators.email]],
        address: ['', ],
      });
    } else if (this.isDelivery) {
      this.updateForm = this.formBuilder.group({
        mobile: ['', ],
        email: ['', [Validators.email]],
        doses: ['', ],
      });
    }
  }

  submit() {
    console.log("Called")
    if (((this.isCustomer) || (this.isRestaurant) || (this.isDelivery)) && this.updateForm.invalid) {
          return;
    } 

    if (this.isCustomer) {
      console.log("Customer");
      let c = {
        mobile: this.updateForm.controls["mobile"].value,
        email: this.updateForm.controls["email"].value,
      }
      this.userService.update_customer(c).pipe(first())
      .subscribe(
        data => {console.log(data),this.router.navigate(["/login"])},
        error => {console.log(error)}
      )
    } else if (this.isRestaurant) {
      console.log("Restaurant");
      let c = {
        restaurant_name: this.updateForm.controls["name"].value,
        mobile: this.updateForm.controls["mobile"].value,
        email: this.updateForm.controls["email"].value,
        address: "84, Near Honda Showroom, Adchini, New Delhi",
        latitude: 28.53538174,
        longitude: 77.19692286,
        max_safety_follow: this.updateForm.controls["covid_safety"].value,
        overall_discount: this.updateForm.controls["overall_discount"].value,
        open_time: this.updateForm.controls["open_time"].value,
        close_time: this.updateForm.controls["close_time"].value,
        avg_cost_for_two: this.updateForm.controls["avg_cost_for_two"].value
      }
      this.userService.update_restaurant(c).pipe( first())
      .subscribe(
        data => {console.log(data),this.router.navigate(["/login"])},
        error => {console.log(error)}
      )
    } else if (this.isDelivery) {
      console.log("Delivery");
      let c = {
        mobile: this.updateForm.controls["mobile"].value,
        email: this.updateForm.controls["email"].value,
        vaccination_status: this.updateForm.controls["doses"].value
      }
      this.userService.update_delivery(c).pipe( first())
      .subscribe(
      data => {console.log(data),this.router.navigate(["/login"])},
      error => {console.log(error)}
      )
    } else {
      this.router.navigate(["/register"]);
    }
  }
}
