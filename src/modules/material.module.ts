import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class MaterialCustomModule { }
