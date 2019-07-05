import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListService } from './employee-list/employee-list.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeContentComponent } from './home-content/home-content.component';
import { EmployeeListDetailsComponent } from './employee-list-details/employee-list-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    HomeContentComponent,
    EmployeeListDetailsComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
