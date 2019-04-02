import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/models/user';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {


  userModel : UserModel = new UserModel;
  message:any;
  constructor(private uibotService: MessageService) { }

  ngOnInit() {
  }
  sendUser(){
   let x = {
      "message": this.message,
      "context" : {
      }
  }

  this.userModel.name = this.message;
    this.uibotService.sendMessage(x).subscribe(res=>{
      console.log(res);
    })
  }
}
