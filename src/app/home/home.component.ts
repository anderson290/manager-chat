import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  company: any;
  tokenObj: any;

  constructor(
    private authService: AuthService
  ) {
    
   }

  ngOnInit() {
       this.getCompany();
  }

  getCompany(){
    this.tokenObj = JSON.parse(localStorage.getItem('company'));
    this.authService.decodeToken(this.tokenObj.token).subscribe(res=>{
      this.company = res.company;      
    });
  }

}
