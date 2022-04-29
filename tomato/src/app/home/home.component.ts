import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDelivery = true;

  constructor(
    private router: Router
  ) { 
    if (sessionStorage.getItem('token')!==null && sessionStorage.getItem('token')!==undefined) {
      let payload = JSON.parse( sessionStorage.getItem('payload') || '{}' )
      console.log(payload['role'].toUpperCase());
      if(payload['role'].toUpperCase() === 'DELIVERY'){
        this.isDelivery = true;
      }
    }
  }

  ngOnInit(): void {
  }

}
