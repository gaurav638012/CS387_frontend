import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {genUser} from '../_models/genUser';
import {BASE_URL} from './base';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';
import { tap, shareReplay } from 'rxjs/operators';
import { LogoutService } from './logout.service';
import * as moment from 'moment';
const LOGIN_URL = '/api/login/';
//const REFRESH_URL = '/api/auth/refresh-token/';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  /**
   * storing current user value i.e, username if necessary
   */
  currentUserValue:any; 
  constructor(
    private http: HttpClient,
  ) { }
  private setSession(authResult:any) {
    
    const token = authResult.token; 

    const payload = this.decode(token); 

    const expiresAt = moment.unix(payload.exp); 

    sessionStorage.setItem('token', authResult.token);
    sessionStorage.setItem('payload', JSON.stringify(payload));
    sessionStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  get token(): string {
    return JSON.stringify(sessionStorage.getItem('token'));
  }

  private decode(token: string) {
    try {

        return JSON.parse(atob(token.split(".")[1])); 
    } catch (e) {
        
    }
  }
  /**
   * to call on rendering any page 
   */
  // refreshToken() {
  //   if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {  
  //     /**
  //      * sending a refresh request to backend server if loggedIn
  //      */
  //     return this.http.post(REFRESH_URL,{token:this.token})
  //     .pipe(
  //       tap(response => this.setSession(response)), 
  //       shareReplay(),
  //     ).subscribe();
  //   }
  // }
  /**
   * @return Returns expiry time of the token
   */
  getExpiration() {
    const expiration = sessionStorage.getItem('expires_at');
    const expiresAt = JSON.parse(JSON.stringify(expiration));

    return moment(expiresAt); 
  }

  login(data: genUser)
  { 
    
    return this.http.post(LOGIN_URL,data)  
    .pipe(
      tap(response => {
        console.log(response);
        this.setSession({token:response}); 
      }),
      shareReplay(),
    );
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration()); 
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}


@Injectable()
export class AuthInterceptor implements HttpInterceptor { 
  /** 
   * HttpInterceptor to add authentication requests to outgoing requests
   * 
   * @return Returns request with authourization request
   **/
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /**
     * token value is stored here
     */
    const token = sessionStorage.getItem('token');
    if (token) {
      /**
       * add authorization header "Authorization:JWT token"
       */
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'JWT '.concat(token)) 
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  /**
   * Authgaurd to block unauthenticated page access
  **/
  constructor(private authService: AuthenticationService, private router: Router, private logout:LogoutService) { }
  /**
   * @return this returns a boolean value which tells whether its logged in or not
   * If you are logged in this refreshes the token to make sure the website isnt idle for long
   * If not logged in it logs out and redirects to login page
   */
  canActivate() {
    if (this.authService.isLoggedIn()) {
      /**
       * check login status and refresh
       */
      //this.authService.refreshToken();

      return true;
    } else {
      /**
       * for unauthenticated request redirect to login
       */
      this.logout.logout(); 
      this.router.navigate(['login']);

      return false;
    }
  }
}
