import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    InlineSVGModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    InlineSVGModule
  ]
})
export class SvgModule { }
