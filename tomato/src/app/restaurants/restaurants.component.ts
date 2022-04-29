import { Component, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { first } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { RestaurantService } from '../services/restaurant.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  [x: string]: any;

  isCustomer = true;
  address_list :any;
  addressGroup!: FormGroup;
  selected_address:any;
  
  rest_list:any
  constructor(private customerService:CustomerService,private restaurantService:RestaurantService) {this.customerService.getProfile().pipe(first()).subscribe(data =>{
    console.log(data);
    //console.log("select1",this.selected_address)
    this.address_list = data
    this.selected_address = this.address_list['addressResult'][0]
    //console.log("select2",this.selected_address)
    this.getRest()
    //console.log("select3",this.selected_address)
    
  }) }

  ngOnInit(): void {
    this.customerService.getProfile().pipe(first()).subscribe(data =>{
      console.log(data);
      //console.log("select1",this.selected_address)
      this.address_list = data
      this.selected_address = this.address_list['addressResult'][0]
      //console.log("select2",this.selected_address)
      this.getRest()
      //console.log("select3",this.selected_address)
      
    })
  }

  getRest(){
    console.log(this.selected_address)
    console.log(this.selected_address.length)
    this.restaurantService.get_Rest_list(this.selected_address.latitude,this.selected_address.longitude).pipe(first()).subscribe(data=>{
      console.log("rest_list",data);
      this.rest_list = data
    })
    
  }

}
