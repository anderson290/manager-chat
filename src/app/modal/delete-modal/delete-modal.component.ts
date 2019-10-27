import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from 'src/services/manager.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {


  @Input() company;

  constructor(
    private managerService: ManagerService,
    private activeModal: NgbActiveModal,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  close(key){
    if(key == true){
      let param = this.company;
    
      this.managerService.removeCompany(param).subscribe(res => {
        this.activeModal.close(res);
      });
    }else{
      this.activeModal.close();
    }
    
  }
}
