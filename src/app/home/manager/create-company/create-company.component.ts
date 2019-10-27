import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ManagerService } from 'src/services/manager.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {


  form: FormGroup;
  permissions:any;
  @Input() companyId;

  constructor(
    private formBuilder: FormBuilder,
    private managerService: ManagerService,
    private activeModal: NgbActiveModal
  ) { 
    this.formInit();

  }

  ngOnInit() {
    this.formInit();

    this.permissions = [
      {name: 'Manager', value:'0'},
      {name: 'Company', value:'1'}
    ];
    if (this.companyId) {

     this.getCompanyById();

    } 
  }

  formInit() {
    this.form = this.formBuilder.group({
      companyName: ['', Validators.required],
      fantasyName: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      cnpj: [null, Validators.required],
      // address: ['', Validators.required],
      phoneNumber: [null, Validators.required],
      email: ['', Validators.required],
      site: ['', Validators.required],
      password: ['', Validators.required],
      level: [0, Validators.required]
    });
  }


  getCompanyById() {

    let param = {
      id: this.companyId
    }
    this.managerService.getCompanyById(param).subscribe(res => {
      this.form.patchValue(res);
      console.log('asdasd',this.form);
    })
  }

  close() {
    if(this.companyId){
      let param = this.form.value;
      param.id = this.companyId
      this.managerService.updateCompany(param).subscribe(res => {
        console.log(res);
        this.activeModal.close(res);
      });
    }else{
      this.managerService.createCompany(this.form.value).subscribe(res => {
        this.activeModal.close();
      });
    }
   
  }

}
