import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {


  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit(){
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

  create(){
    console.log(this.form.value);
    
    this.managerService.createCompany(this.form.value).subscribe(res =>{
      console.log(res);
    });
  }

}
