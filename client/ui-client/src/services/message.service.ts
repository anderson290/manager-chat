import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) {

  }  
  private headerL = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    async getMessage(){     
      return await this.httpClient.get('http://localhost:4200/api/conversation/first', { headers: this.headerL }).toPromise();
    }

  async sendMessage(message){
      return await this.httpClient.post('http://localhost:4200/api/conversation/send', message, { headers: this.headerL }).toPromise();
  }
}
