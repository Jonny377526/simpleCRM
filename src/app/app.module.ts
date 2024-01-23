import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LoansComponent,
    LoanTypesComponent,
    AddLoansComponent,
    CustomersComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
