import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/models/user';
import { MessageService } from 'src/services/message.service';
import { ConversationModel } from 'src/models/conversation';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {


  bgPicture: any = 'assets/images/image1.png';
  bgPictureComa: any = 'assets/images/backComa.png';
  userModel: UserModel = new UserModel;
  message: any;
  context: any = {};
  req: any;
  chat: any;
  responseMessage: any;
  responseMessageArr: any;
  responseUser: any;

  user: any = {};
  users: any;

  conversationUser: any;
  constructor(private uibotService: MessageService) { }

  ngOnInit() {
    this.responseMessageArr = []
    this.responseUser = []
    this.getMessage();
  }

  async getMessage() {
    let x = await this.uibotService.getMessage();
    this.chat = x['message'];
    console.log(x)
  }
  async sendUser() {

    this.users = await this.uibotService.getUsers();


    // if(this.users != []){
    //   for (let x of this.users) {

    //     if (this.user._id == x._id) {
    //       await this.uibotService.updateUser(this.user);
    //       console.log('UPDATE', x);
    //       this.req = {
    //         "message": this.message,
    //         "context": this.userModel.conversation[0].context
    //       }
  
    //       console.log("REQUISIÇÃO", this.req)
    //     } else {
    //       this.user = await this.uibotService.createConversation(this.userModel);
    //       console.log('CRIOU')
    //       this.req = {
    //         "message": this.message,
    //         "context": {}
    //       }
  
    //     }
  
  
    //   }
    // }else{
    //   this.user = await this.uibotService.createConversation(this.userModel);
    //       console.log('CRIOU')
    //   this.req = {
    //     "message": this.message,
    //     "context": {}
    //   }
    // }
  

    this.user = await this.uibotService.createConversation(this.userModel);
          console.log('CRIOU')
      this.req = {
        "message": this.message,
        "context": {}
      }

    let response = await this.uibotService.sendMessage(this.req);

    this.conversationUser = response;


    this.userModel.conversation[0] = this.conversationUser;

    await this.uibotService.updateUser(this.userModel);

  }
}
