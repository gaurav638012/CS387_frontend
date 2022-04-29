import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientModule } from '@angular/common/http'; 
import { ConstantPool } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public submitted = false;
  public formGroup!: FormGroup;
  public loading = false;
  constructor(private _formBuilder: FormBuilder, private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,) { 

    if (sessionStorage.getItem('token')!==null && sessionStorage.getItem('token')!==undefined) {
      let payload = JSON.parse( sessionStorage.getItem('payload') || '{}' )
      console.log(payload['role'].toUpperCase());
      if(payload['role'].toUpperCase() === 'CUSTOMER'){
        this.router.navigate(['restaurants'])
      }
      if(payload['role'].toUpperCase() === 'DELIVERY'){
        this.router.navigate(['approveOrders'])
      }
      if(payload['role'].toUpperCase() ==='RESTAURANT'){
        this.router.navigate(['approveOrders'])
      }
    }
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

   //console.log("hai girish")
    if (this.formGroup.invalid) {
      
        this.submitted = false;
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.formGroup.value)
        .pipe(first())
        .subscribe(
            data => {
                console.log(data);
                const tok=sessionStorage.getItem('token');
                console.log(tok);
                if(tok==null||tok==undefined){
                    this.loading=false;
                    window.alert('invalid login');
                    this.router.navigate(['login']);
                }
                
                let payload = JSON.parse( sessionStorage.getItem('payload') || '{}' )
                console.log(payload['role'].toUpperCase());
                if(payload['role'].toUpperCase() === 'CUSTOMER'){
                  this.router.navigate(['restaurants'])
                }
                if(payload['role'].toUpperCase() === 'DELIVERY'){
                  this.router.navigate(['approveOrders'])
                }
                if(payload['role'].toUpperCase() ==='RESTAURANT'){
                  this.router.navigate(['approveOrders'])
                }
            },
            error => {
                this.loading = false;
            });
}

}
