import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {


  url: string = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  
  getCompanyById(params){
    params.id = params
    return this.http.get<any>(`${this.url}/company`, params);
  }

  
  getCompanies(){
    return this.http.get<any>(`${this.url}/company/companies`);
  }


  createCompany(params){
    return this.http.post<any>(`${this.url}/company/create`, params);
  }

  getTickets(){
    return this.http.get<any>(`${this.url}/ticket`);
  }
}
