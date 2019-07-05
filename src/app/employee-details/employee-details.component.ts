import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { EmployeeListService } from '../employee-list/employee-list.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 public employeeId;
 public employees = [];
 public employee;
 constructor(private _employeeListService : EmployeeListService, private route : ActivatedRoute) {
  }
  // ngOnInit() {
  //   let id = parseInt(this.route.snapshot.paramMap.get('id'));
  //   this.employeeId = id;
  //   this._employeeListService.getEmployees()
  //   .subscribe(data => this.employees = data);
  
  // }

  ngOnInit() { 
    this.route.queryParams.subscribe((param) =>{
    this.employee = param;
    // this._employeeService.getEmployees()
    // .subscribe(data => this.employees = data);
    });
    } 

}
