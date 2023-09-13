import {Component, OnInit} from '@angular/core';
import {Salary} from "./models/Salary";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  salary : Salary[]=[{
     id:1,
      name:"Lavinia",
      contactNo:123456789,
      date:"12/12/2019",
      presentDays:10,
      adTotal:100,
      amount:1000,
      total:11000
    },
    {
      id:2,
      name:"Andrei",
      contactNo:123456789,
      date:"12/12/2019",
      presentDays:20,
      adTotal:100,
      amount:1000,
      total:20100
    },
    {
      id:3,
      name:"Ana",
      contactNo:123456789,
      date:"14/10/2019",
      presentDays:20,
      adTotal:400,
      amount:1000,
      total:20400
    }];
  constructor() {

  }
  ngOnInit() {
  }

  numberEmployees(){
    return this.salary.length;
  }


}
