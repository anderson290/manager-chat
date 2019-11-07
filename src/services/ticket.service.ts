import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  url: string = environment.url;

  private headerL = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  getTickets(){
    return this.http.get<any>(`${this.url}/ticket`);
  }

  getTicketsByCompany(companyId){
    return this.http.post<any>(`${this.url}/ticket/getByCompany`, companyId);
  }

  async updateTicket(params) { 
    console.log(params); 
    return await this.http.post<any>(this.url+'/ticket/update', params, { headers: this.headerL }).toPromise();
  }
}
