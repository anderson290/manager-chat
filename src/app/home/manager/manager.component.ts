import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  company: any;
  tokenObj: any;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany(){
    this.tokenObj = JSON.parse(localStorage.getItem('company'));
    this.authService.decodeToken(this.tokenObj.token).subscribe(res=>{
      this.company = res.company;
      console.log(this.company);
    });
  }

  exit(){
    localStorage.clear();
    this.route.navigate(['/']);
  }
}
