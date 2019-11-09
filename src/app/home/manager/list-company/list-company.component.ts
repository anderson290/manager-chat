import { Component, OnInit, ViewChild } from '@angular/core';
import { ManagerService } from 'src/services/manager.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCompanyComponent } from '../create-company/create-company.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { DeleteModalComponent } from 'src/app/modal/delete-modal/delete-modal.component';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})

export class ListCompanyComponent implements OnInit {
  displayedColumns: string[] = ['cnpj', 'name', 'email', 'site', 'action'];
  dataSource: any;
  companies: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private managerService: ManagerService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'Itens por Página';

    this.getCompanies();

  }

  getCompanies(){
    this.managerService.getCompanies().subscribe(res=>{
      this.companies = res;

      this.dataSource = new MatTableDataSource<any>(this.companies);

      this.dataSource.paginator = this.paginator;


    });
  }
  openCompanyModal(id?, key?){
    let modal = this.modalService.open(CreateCompanyComponent, {size:'lg'});
    if(id){
      modal.componentInstance.companyId = id;
    }
    modal.result.then(res=>{
      this.getCompanies();
    });
  }

  openDeleteModal(comp){
    let modal = this.modalService.open(DeleteModalComponent, {size:'lg'});
    modal.componentInstance.company = comp;
    modal.result.then(res=>{
      this.getCompanies();
    });
  }

}
