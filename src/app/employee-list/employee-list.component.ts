import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from './employee-list.service';
import {Router,  NavigationExtras } from "@angular/router"

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 public employees =[];
 public pageName:string;
  constructor(private _employeeListService : EmployeeListService, private router:Router) { }

  ngOnInit() {
    this._employeeListService.getEmployees()
    .subscribe(data => this.employees = data);
  }
  // onSelect(employee){
  //   this.router.navigate(['/employeeDetails', { p1: employee.id, p2: employee.name }]);
  //   this.pageName = "Employee Details";
  // }
  onSelect(employee){
    let navigationExtras: NavigationExtras = { 
    queryParams: employee,
    skipLocationChange: true
    };  
    this.router.navigate(['/employeeDetails'], navigationExtras);
    } 

}
