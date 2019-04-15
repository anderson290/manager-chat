import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  url:string = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {

  }
  private headerL = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  
  async getMessage() {
    return await this.httpClient.get(this.url+'conversation/first', { headers: this.headerL }).toPromise();
  }

  async sendMessage(message) {
    return await this.httpClient.post(this.url+'conversation/send', message, { headers: this.headerL }).toPromise();
  }

  async createConversation(user) {

    return await this.httpClient.post(this.url+'conversation/create', user, { headers: this.headerL }).toPromise();
  }

  async getUsers(){
    return await this.httpClient.get(this.url+'conversation/users', { headers: this.headerL }).toPromise();
  
  }

  async updateUser(id, user){

    let sendId = {
      id: id,
      user: user
    }
    return await this.httpClient.put(this.url+'conversation/updateUser', sendId, { headers: this.headerL }).toPromise();

  }
}
