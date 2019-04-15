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


  bgPicture: any = 'assets/images/header.png';
  bgPictureComa: any = 'assets/images/backComa.png';
  userModel: UserModel = new UserModel();
  message: any;
  context: any = {};
  req: any;
  log: any;
  chat: any;
  responseMessage: any;
  responseMessageArr: any;
  userArr: any;
  responseUser: any;
  userId: any;
  firstOption: any;

  user: any = {};
  users: any;

  par: boolean = false;
  chatBox: boolean = false;

  conversationUser: any;
  cont: number = 1;

  opRes: boolean = false;
  options: any;
  constructor(private uibotService: MessageService) {
    sessionStorage.setItem('contextId', '');
    this.userModel = new UserModel();
  }

  ngOnInit() {
    this.responseMessageArr = [];
    this.responseUser = [];

    this.options = [];
    sessionStorage.setItem('contextId', '');

    this.getMessage();
  }

  async getMessage() {
    let x = await this.uibotService.getMessage();
    this.chat = x['message'];
    this.firstOption = x['options'].options[0];
    this.opRes = true;
    // console.log(this.firstOption)
  }
 
  
  async setOption(option) {
    this.message = option;
    this.req = JSON.parse(sessionStorage.getItem('contextId'));
    this.req.message = this.message;
    this.responseMessageArr.push(this.message);
    this.responseMessage = await this.uibotService.sendMessage(this.req);
    sessionStorage.setItem('contextId', JSON.stringify(this.responseMessage));
    this.responseMessageArr.push(this.responseMessage.output.text);
    this.opRes = false;
    this.userModel.conversation = this.responseMessage;

    this.userArr = await this.uibotService.getUsers();

    for (let i of this.userArr) {
      if (i.conversation[0].context.conversation_id == this.responseMessage.context.conversation_id) {
        this.log = {
          input: this.message,
          output: this.responseMessage.output.text
        }
        this.userModel.conversation['output'].log_messages.push(this.log);
        await this.uibotService.updateUser(i._id, this.userModel);
      }
    }
  }

  async sendUser() {

    if (sessionStorage.getItem('contextId') != '') {
      console.log("Segundo")

      this.req = JSON.parse(sessionStorage.getItem('contextId'));
      this.req.message = this.message;
      this.responseMessageArr.push(this.message);

      this.responseMessage = await this.uibotService.sendMessage(this.req);
      sessionStorage.setItem('contextId', JSON.stringify(this.responseMessage));

      if (this.responseMessage.output.generic[0].options) {
        this.responseMessageArr.push(this.responseMessage.output.generic[0].title);
        this.options = this.responseMessage.output.generic[0].options;
        this.opRes = true;
      } else {
        this.responseMessageArr.push(this.responseMessage.output.text);
        this.opRes = false;
      }

      this.userModel.name = this.responseMessage.context.nome_user;
      this.userModel.age = this.responseMessage.context.age_user;
      this.userModel.location = this.responseMessage.context.location;
      this.userModel.maritalStatus = this.responseMessage.context.maritalStatus;
      this.userModel.sex = this.responseMessage.context.genero;
      this.userModel.conversation = this.responseMessage;

      this.userArr = await this.uibotService.getUsers();

      for (let i of this.userArr) {
        if (i.conversation[0].context.conversation_id == this.responseMessage.context.conversation_id) {
          this.log = {
            input: this.message,
            output: this.responseMessage.output.text
          }
          this.userModel.conversation['output'].log_messages.push(this.log);
          await this.uibotService.updateUser(i._id, this.userModel);
        }
      }

    } else {
      console.log("Primeiro")

      this.responseMessageArr.push('Vamos Nessa!!!');

      this.req = {
        "message": 'Ok',
        "context": {},
      }


      console.log(this.req)



      this.responseMessage = await this.uibotService.sendMessage(this.req);


      this.responseMessageArr.push(this.responseMessage.output.text);

      this.log = {
        input: this.message,
        output: this.responseMessage.output.text
      }

      sessionStorage.setItem('contextId', JSON.stringify(this.responseMessage));
      this.userModel.conversation = this.responseMessage;

      console.log(this.userModel)
      this.userModel.conversation['output'].log_messages.push(this.log);

      this.userId = await this.uibotService.createConversation(this.userModel);
      console.log("ID", this.userId)
      //  sessionStorage.setItem('userId', id._id);
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

  openChat() {

    this.chatBox = true;

  }
  closeChat() {
    this.chatBox = false;
  }
}
