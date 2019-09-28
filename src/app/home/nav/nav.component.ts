import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models/company';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  constructor(
    private authService:AuthService,
    private route: Router
  ) { }

  company: Company;
  tokenObj: any;

  ngOnInit() {
    this.getCompany();
  }
  
  getCompany(){
    this.tokenObj = JSON.parse(localStorage.getItem('company'));
    this.authService.decodeToken(this.tokenObj.token).subscribe(res=>{
      this.company = res.company;      
    });
  }

  exit(){
    localStorage.clear();
    this.route.navigate(['/']);
  }
}
