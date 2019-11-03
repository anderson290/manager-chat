import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() company;
  tickets:any;
  conversation: any;

  constructor(
    private manageService: ManagerService
  ) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(){
    let params = {
      companyId: this.company._id
    }
    this.manageService.getTicketsByCompany(params).subscribe(res=>{
      this.tickets = res;
      console.log(this.tickets);
    });
  }

  changeConversation(conv){
    this.conversation = conv;
  }
}
