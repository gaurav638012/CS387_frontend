import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  isCustomer = true;
  isRestaurant = true;

  constructor() { }

  ngOnInit(): void {

  }


}
