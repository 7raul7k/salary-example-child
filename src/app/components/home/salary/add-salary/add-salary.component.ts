import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit{

  name = "";
    contact = 0;
    date = Date();
    presentDays = 0;
    adTotal = 0;
    amount = 0;
    total = 0;


  @Output() addSalary = new EventEmitter<{name:string, contactNo:number,date:string,adTotal:number,amount:number}>();
  constructor() {

  }
  ngOnInit() {
  }

    onAddSalary(){
        this.addSalary.emit({name:this.name, contactNo:this.contact,date:this.date,adTotal:this.adTotal,amount:this.amount});
    }

    onReset(){
        this.name = "";
        this.contact = 0;
        this.date = Date();
        this.presentDays = 0;
        this.adTotal = 0;
        this.amount = 0;
        this.total = 0;
    }




}
