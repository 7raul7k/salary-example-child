import {Component, Input} from '@angular/core';
import {Salary} from "../../models/Salary";

@Component({
  selector: 'app-salary-table',
  templateUrl: './salary-table.component.html',
  styleUrls: ['./salary-table.component.css']
})
export class SalaryTableComponent {

  @Input() employes : Salary[] = [];

}
