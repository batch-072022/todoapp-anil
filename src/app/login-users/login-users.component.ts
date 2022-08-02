import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {

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

}
