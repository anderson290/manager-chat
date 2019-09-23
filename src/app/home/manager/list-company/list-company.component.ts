import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})
export class ListCompanyComponent implements OnInit {
  displayedColumns: string[] = ['cnpj', 'name', 'email', 'site'];
  dataSource: any;
  companies: any;
  constructor(
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.managerService.getCompanies().subscribe(res=>{
      this.companies = res;
      this.dataSource = this.companies;
    });
  }

}
