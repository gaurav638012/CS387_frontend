import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  isCustomer = false;
  isRestaurant = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('token')!==null && sessionStorage.getItem('token')!==undefined) {
      //console.log("what the fuck")
      let payload = JSON.parse( sessionStorage.getItem('payload') || '{}' );
      if(payload['role'] === 'CUSTOMER'){
        this.isCustomer = true;
      }
      if(payload['role'] === 'RESTAURANT'){
        this.isRestaurant = true;
      }
      console.log(payload['role']);
    }
  }
}
