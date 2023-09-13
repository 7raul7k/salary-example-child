import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Salary} from "../../models/Salary";

@Component({
  selector: 'app-salary-table',
  templateUrl: './salary-table.component.html',
  styleUrls: ['./salary-table.component.css']
})
export class SalaryTableComponent {

  @Input() employes : Salary[] = [];

  @Output() deleteEmployee = new EventEmitter<{name:string}>();
    constructor() { }

    ngOnInit() {

    }

    onDeleteEmployee(name: string){
      this.employes.forEach((employee,index)=>{
            if(employee.name === name){
                this.employes.splice(index,1);
            }
      });
    }
}
