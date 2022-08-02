import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!:string;
  email!:string;
  password!:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onsubmit(){
  console.log(this.name+", "+this.email+", "+this.password);

  const userObj ={
    "name":this.name,
    "email":this.email,
    "password":this.password
  };
  console.log(userObj);
  alert("Successfully Registered")
  this.router.navigateByUrl("/login")
}

}
