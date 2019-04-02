import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) {

  }  
  private headerL = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    });
  
  sendMessage(message){
      return this.httpClient.post('localhost:3000/conversation/send', message, { headers: this.headerL });
  }
}
