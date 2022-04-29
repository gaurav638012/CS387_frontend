import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/cdk/overlay/overlay-directives';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { Address } from '../_models/address';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent implements OnInit {

  isCustomer = false;
  addresses = {};
  addrs: string[] = [];

  deletegroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
  ) { 
    let payload = JSON.parse( sessionStorage.getItem('payload') || '{}' )
    if(payload['role'].toUpperCase() === 'CUSTOMER'){
      this.isCustomer = true;
    }
  }

  ngOnInit(): void {
    this.deletegroup = this.formBuilder.group({
      apartment_name: ['',],
      street_name: ['',],
      city_name: ['',],
      pincode: ['',],
    });
    this.customerService.get_addresses().pipe(first()).subscribe(
      data => {console.log(data); this.addresses = data;},
      error => {console.log(error);}
    );
  }
}
