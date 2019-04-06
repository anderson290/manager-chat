import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '../layout/layout.module';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    LayoutModule

  ],  
  declarations: [],
  exports:[
    CommonModule,
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    LayoutModule
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders{
    return{
      providers:[],
      ngModule: SharedModule
    };
  }
}
