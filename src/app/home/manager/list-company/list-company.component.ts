import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/services/manager.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCompanyComponent } from '../create-company/create-company.component';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})

export class ListCompanyComponent implements OnInit {
  displayedColumns: string[] = ['cnpj', 'name', 'email', 'site', 'edit', 'delete'];
  dataSource: any;
  companies: any;
  constructor(
    private managerService: ManagerService,
    private modalService: NgbModal 
  ) { }

  ngOnInit() {
     this.getCompanies();
  }

  getCompanies(){
    this.managerService.getCompanies().subscribe(res=>{
      this.companies = res;
      this.dataSource = this.companies;
    });
  }
  openCompanyModal(id?){
    let modal = this.modalService.open(CreateCompanyComponent, {size:'lg'});
    if(id){
      modal.componentInstance.companyId = id;
    }
    modal.result.then(res=>{
      this.getCompanies();
    });
  }

}
