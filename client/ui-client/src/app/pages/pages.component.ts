import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/models/user';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {


  userModel: UserModel = new UserModel;
  message: any;
  context: any = {};
  req: any;
  chat: any;
  responseMessage: any;
  responseMessageArr: any;
  responseUser: any;
  constructor(private uibotService: MessageService) { }

  ngOnInit() {
    this.responseMessageArr = []
    this.responseUser = []
    this.getMessage();
  }

  async getMessage() {
    let x = await this.uibotService.getMessage();
    this.chat = x['message'];
  }
  async sendUser() {
    this.req = {
      "message": this.message,
      "context": {}
    }

    if (this.message == 'Anderson') {
      this.req = {
        "message": this.message,
        "context": {},
        "origin": 'user'
      }
    }



    this.userModel.name = this.message;


    let responseWatson = await this.uibotService.sendMessage(this.req);
    console.log(responseWatson)
    this.responseMessage = responseWatson['output'].text[0];
    this.responseUser.push(this.message);

    this.responseMessageArr.push(this.responseMessage)
  }
}
