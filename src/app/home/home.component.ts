import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pageName:string = "Home";
  public homePage:boolean = true;

  constructor(private router:Router) { }
  showEmployee(){
    this.homePage = false;
    this.pageName = "Employee List"
  }
  backClicked() {
    this.router.navigate(['']);
    this.pageName = "Home"
    this.homePage = true;

  }
  ngOnInit() {
  }

}
