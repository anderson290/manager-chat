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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ManagerComponent,
    UserComponent,
    CreateCompanyComponent,
    ListCompanyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialCustomModule,
    FormsModule,
    ReactiveFormsModule,
    SvgModule,
    NgbModule
  ],
  entryComponents: [
    CreateCompanyComponent
  ],
  providers: [
    ManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
