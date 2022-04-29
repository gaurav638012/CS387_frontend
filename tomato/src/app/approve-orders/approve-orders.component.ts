import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-orders',
  templateUrl: './approve-orders.component.html',
  styleUrls: ['./approve-orders.component.css']
})
export class ApproveOrdersComponent implements OnInit {

  isRestaurant = true;
  isDelivery = true;

  constructor() { }

  ngOnInit(): void {
  }

}
