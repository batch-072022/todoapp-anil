import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  edituser ={

    id:10,

    name:"Anil",

    email:"anil@gmail.com"

  };

  updateuser(){

    alert("successfully upadte");



    this.router.navigateByurl('/edituser')

  }
}
