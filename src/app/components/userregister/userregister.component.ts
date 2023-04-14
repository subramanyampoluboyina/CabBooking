import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/userdetails';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit{
  constructor(private router:Router){

  }
  public userdetails=new UserDetails;
  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
    if(form.valid){
      if(this.userdetails.password == this.userdetails.cpassword){
        this.router.navigateByUrl("/usersuccessregister");
      } 
    }
    else{
      alert("Invalid details!!!");
    }
  }

}
