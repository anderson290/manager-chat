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


  bgPicture: any = 'assets/images/header.svg';
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
  cont: number = 1;
  constructor(private uibotService: MessageService) { }

  ngOnInit() {
    this.responseMessageArr = []
    this.responseUser = []
    sessionStorage.setItem('contextId', '');

    this.getMessage();
  }

  async getMessage() {
    let x = await this.uibotService.getMessage();
    this.chat = x['message'];
    console.log(x)
  }
  async sendUser() {



    if (sessionStorage.getItem('contextId') != '') {
      console.log("Segundo")

      this.req = JSON.parse(sessionStorage.getItem('contextId'));
      this.req.message = this.message;    

      this.responseMessage = await this.uibotService.sendMessage(this.req);
      sessionStorage.setItem('contextId', JSON.stringify(this.responseMessage));
      this.userModel.name = this.responseMessage.context.nome_user;
      this.userModel.age = this.responseMessage.context.age_user;
      this.userModel.location = this.responseMessage.context.location;
      this.userModel.maritalStatus = this.responseMessage.context.maritalStatus;
      this.userModel.sex = this.responseMessage.context.genero;
      this.userModel.conversation = this.responseMessage;

      await this.uibotService.updateUser(this.userModel);      
      
      console.log("USER", this.userModel);

    } else {
      console.log("Primeiro")

      this.req = {
        "message": this.message,
        "context": {},

      }

      this.responseMessage = await this.uibotService.sendMessage(this.req);
      sessionStorage.setItem('contextId', JSON.stringify(this.responseMessage));
      this.userModel.conversation = this.responseMessage;
      await this.uibotService.createConversation(this.userModel);      

    }



    //   this.conversationUser = response;


    //   this.userModel.conversation[0] = this.conversationUser;

    //   await this.uibotService.updateUser(this.userModel);

    // this.users = await this.uibotService.getUsers();
    // this.cont++;


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





  }
}
