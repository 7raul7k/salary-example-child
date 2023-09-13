import {Component, Input, OnInit} from '@angular/core';
import {Salary} from "../models/Salary";

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent  implements OnInit{

  @Input() employes : Salary[] = [];
  constructor() { }

  ngOnInit() {
  }

}
