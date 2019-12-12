import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialCustomModule } from 'src/modules/material.module';

import { LoginComponent } from './login/login.component';
import { SvgModule } from 'src/modules/svg.module';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './home/manager/manager.component';
import { UserComponent } from './home/user/user.component';
import { CreateCompanyComponent } from './home/manager/create-company/create-company.component';
import { ListCompanyComponent } from './home/manager/list-company/list-company.component';
import { ManagerService } from 'src/services/manager.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/services/auth.service';
import { NavComponent } from './home/nav/nav.component';
import { DeleteModalComponent } from './modal/delete-modal/delete-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { CloseTicketModalComponent } from './modal/close-ticket-modal/close-ticket-modal/close-ticket-modal.component';
import { TicketService } from 'src/services/ticket.service';
import { ModalChartComponent } from './modal/modal-chart/modal-chart.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ManagerComponent,
    UserComponent,
    CreateCompanyComponent,
    ListCompanyComponent,
    NavComponent,
    DeleteModalComponent,
    CloseTicketModalComponent,
    ModalChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialCustomModule,
    FormsModule,
    ReactiveFormsModule,
    SvgModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
    NgxSpinnerModule

  ],
  entryComponents: [
    CreateCompanyComponent,
    DeleteModalComponent,
    CloseTicketModalComponent,
    ModalChartComponent
  ],
  providers: [
    ManagerService,
    TicketService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
