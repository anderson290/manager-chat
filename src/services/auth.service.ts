import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  url: string = environment.url;

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) :Observable<boolean> | boolean{
    if (JSON.parse(localStorage.getItem('company'))) {
      return true;
    } else {
      this.route.navigate(['/']);
      return false;
    }
  }

  checkLogin(form) {
    this.http.post<any>(`${this.url}/company/authenticate`, form).subscribe(res => {
      if (res.status == 404) {
        console.log('ERRO');
      } else {
        console.log(res);
        localStorage.setItem('company', JSON.stringify(res));
        this.route.navigate(['/home']);
      }
    });
  }

  decodeToken(token) {
    let params = {
      token: token
    }
    return this.http.post<any>(`${this.url}/company/decode-token`, params);
  }


}
