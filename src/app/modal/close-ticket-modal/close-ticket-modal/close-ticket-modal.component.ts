import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TicketService } from 'src/services/ticket.service';

@Component({
  selector: 'app-close-ticket-modal',
  templateUrl: './close-ticket-modal.component.html',
  styleUrls: ['./close-ticket-modal.component.scss']
})
export class CloseTicketModalComponent implements OnInit {


  form: FormGroup;

  @Input() ticket;

  constructor(
    private formBuilder: FormBuilder,
    private activeModal: NgbActiveModal,
    private toastrService: ToastrService,
    private ticketService: TicketService

  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      close: [true, Validators.required],
      option: ['', Validators.required]
    });

    console.log(this.ticket);
  }

  close(key?){
    if(key){
      this.activeModal.close();
    }else{
      if(this.form.valid){
        this.activeModal.close(this.form.value);
        this.ticket.status = "closed";
        this.ticket.reason = this.form.get('option').value;
        this.ticketService.updateTicket(this.ticket).then(res=>{
          console.log(res);
          this.toastrService.success('Ticket foi encerrado com sucesso!', 'Ticket Encerrado');
        });
      }else{
        this.toastrService.warning('Preencha todos os campos!')
      }
    }
    
  }

}
