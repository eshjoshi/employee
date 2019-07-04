import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DisplayNotFoundComponent } from './display-not-found/display-not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path:'', redirectTo:'/displayNotFound',pathMatch:'full'},
 // {path:'',component:AppComponent},
  {path:'displayNotFound',component:DisplayNotFoundComponent},
  {path:'employeeList',component:EmployeeListComponent},
  // {path:"**", component:DisplayNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DisplayNotFoundComponent,EmployeeListComponent]
