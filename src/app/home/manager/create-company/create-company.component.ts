import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ManagerService } from 'src/services/manager.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { isCNPJ, formatToCNPJ } from 'brazilian-values';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {


  form: FormGroup;
  permissions:any;
  hide: any;
  @Input() companyId;

  constructor(
    private formBuilder: FormBuilder,
    private managerService: ManagerService,
    private activeModal: NgbActiveModal,
    private toastrService: ToastrService
  ) {

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
      address: ['', Validators.required],
      phoneNumber: [null, Validators.required],
      email: ['', Validators.required],
      site: ['', Validators.required],
      password: ['', Validators.required],
      level: [0, Validators.required]
    });
  }

  cnpjValidate(value) {
    if (isCNPJ(value)){
      console.log('true');
    }else{
      console.log('falso');
    }
  }

  getCompanyById() {

    let param = {
      id: this.companyId
    }
    this.managerService.getCompanyById(param).subscribe(res => {
      this.form.patchValue(res);
    })
  }

  close() {
    if(this.form.valid){
      if(this.companyId){
        let param = this.form.value;
        param._id = this.companyId
        this.managerService.updateCompany(param).subscribe(res => {
          if(res.status == 200){
            this.toastrService.success(`A Empresa ${param.companyName} foi atualizada com sucesso!`, 'Empresa Atualizada');
            this.activeModal.close(res);
          }else{
            this.toastrService.error(`Ocorreu uma falha no sistema!`, 'Ops!');
          }
        });
    }else{
      this.managerService.createCompany(this.form.value).subscribe(res => {
        console.log(res);
        if(res.status == 200){
          this.toastrService.success(`A Empresa ${this.form.get('companyName').value} foi criada com sucesso!`, 'Empresa Criada');
          this.activeModal.close(res);
        }else{
          this.toastrService.error(`Ocorreu uma falha no sistema!`, 'Ops!');
        }
      });
    }
    }else{
      this.toastrService.warning(`Preencha todos os campos do formulário!`);

    }


  }

}
