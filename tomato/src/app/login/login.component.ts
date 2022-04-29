import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = "";
  public password = "";

  public formGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder,private route: ActivatedRoute,
    private router: Router,) { 
    if (sessionStorage.getItem('token')!=null && sessionStorage.getItem('token')!="undefined") {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      loginform: [''],
    });
  }

}
