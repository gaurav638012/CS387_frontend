import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-fooditem',
  templateUrl: './add-fooditem.component.html',
  styleUrls: ['./add-fooditem.component.css']
})
export class AddFooditemComponent implements OnInit {

  isRestaurant = true;

  constructor() { }

  ngOnInit(): void {
  }

}
