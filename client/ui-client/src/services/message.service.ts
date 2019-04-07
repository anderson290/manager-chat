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

  async getMessage() {
    return await this.httpClient.get('http://localhost:3000/conversation/first', { headers: this.headerL }).toPromise();
  }

  async sendMessage(message) {
    return await this.httpClient.post('http://localhost:3000/conversation/send', message, { headers: this.headerL }).toPromise();
  }

  async createConversation(user) {

    return await this.httpClient.post('http://localhost:3000/conversation/create', user, { headers: this.headerL }).toPromise();
  }

  async getUsers(){
    return await this.httpClient.get('http://localhost:3000/conversation/users', { headers: this.headerL }).toPromise();
  
  }

  async updateUser(user){
    return await this.httpClient.put('http://localhost:3000/conversation/updateUser', user, { headers: this.headerL }).toPromise();

  }
}
