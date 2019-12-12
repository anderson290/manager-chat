import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from 'src/services/manager.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CloseTicketModalComponent } from 'src/app/modal/close-ticket-modal/close-ticket-modal/close-ticket-modal.component';
import { ModalChartComponent } from 'src/app/modal/modal-chart/modal-chart.component';
import { TicketService } from 'src/services/ticket.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() company;
  tickets:any;
  ticket: any;
  conversation: any;
  message: string;

  url: string = 'http://dashjuridico.herokuapp.com/public/dashboard/fda74e3b-3b93-43da-9624-d03465cf2a82';
  urlSafe: SafeResourceUrl;

  constructor(
    private manageService: ManagerService,
    private ticketService: TicketService,
    private modalService: NgbModal,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getTickets();
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + '?companyid=' + this.company._id);
  }

  getTickets(){
    let params = {
      companyId: this.company._id
    }
    this.ticketService.getTicketsByCompany(params).subscribe(res=>{
      this.tickets = res;
      this.tickets = this.tickets.filter(res=> res.status == "inProgress");
    });
  }

  changeConversation(ticket){
    this.conversation = ticket.conversation;
    this.ticket = ticket;
  }

  sendMessage(){
   this.ticket.conversation.push({
      message: this.message,
      userType: 'admin'
   });

   this.ticketService.updateTicket(this.ticket).then(res=>{
     this.message = '';
   })
  }

  closeTicket(selectedTicket){
    let modal = this.modalService.open(CloseTicketModalComponent);

    modal.componentInstance.ticket = selectedTicket;
    modal.result.then(res=>{
      this.getTickets();
    });
  }

  modalChart(urlIframe){
    let modal = this.modalService.open(ModalChartComponent);
    modal.componentInstance.urlIframe = urlIframe;
  }

}
