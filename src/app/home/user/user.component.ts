import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  tickets:any;
  conversation: any;

  constructor(
    private manageService: ManagerService
  ) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(){
    this.manageService.getTickets().subscribe(res=>{
      this.tickets = res;
      this.conversation = this.tickets[0].conversation;
    })
  }

  changeConversation(conv){
    this.conversation = conv;
  }
}
