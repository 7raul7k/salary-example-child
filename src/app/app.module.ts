import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { SalaryComponent } from './components/home/salary/salary.component';
import { SalaryTableComponent } from './components/home/salary/salary-table/salary-table.component';
import { AddSalaryComponent } from './components/home/salary/add-salary/add-salary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SalaryComponent,
    SalaryTableComponent,
    AddSalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
