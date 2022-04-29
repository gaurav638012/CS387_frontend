import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  address: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.address = this.formBuilder.group({
      apartment_name: ['', Validators.required],
      street_name: ['', Validators.required],
      city_name: ['', Validators.required],
      pincode: ['', Validators.required],
    });
  }

  onSubmit(): void {
    let addr = "";

    addr = `${this.address.controls["apartment_name"].value}, ${this.address.controls["street_name"].value}, ${this.address.controls["city_name"].value}-${this.address.controls["pincode"].value}`;
    console.log(addr);

    let a = {
      address: addr,
      latitude: 28.53839431 + (Math.random() * (0.001 - 0.0001) + 0.0001),
      longitude: 77.19804244 + (Math.random() * (0.001 - 0.0001) + 0.0001)
    }
    console.log(a);
    this.customerService.update_address(a).pipe(first()).subscribe(
      data => {console.log(data); this.router.navigate(['/address']);},
      error => {console.log(error)}
    );
  }

}
