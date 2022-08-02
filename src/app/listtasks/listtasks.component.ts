import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtasks',
  templateUrl: './listtasks.component.html',
  styleUrls: ['./listtasks.component.css']
})
export class ListtasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {id:232,firstname:"Anil",lastname:"Barla",email:"anil@gmail.com"},
    {id:222,firstname:"Manoj",lastname:"Manoj",email:"sai@gmail.com"},
    {id:222,firstname:"Sai",lastname:"krishnna",email:"sai@gmail.com"}
  ];

  deleteUsers(){
    alert("Successfully Deleted");
  }
tasks=[
  {id:1,name:"Install Java",status:"COMPLETED"},
  {id:2,name:"Install NodeJS",status:"PENDING"}
]

}
