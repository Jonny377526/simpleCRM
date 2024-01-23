import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path:'customers',
  component: CustomersComponent
  },
  {
    path:'loans',
  component: LoansComponent
  },
  {
    path: 'loan/add-loans',
    component: AddLoansComponent,
  },
  {
    path: 'loan-types',
    component: LoanTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
