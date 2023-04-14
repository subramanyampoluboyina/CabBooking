import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverDetails } from 'src/app/models/driverdetails';

@Component({
  selector: 'app-driverlogin',
  templateUrl: './driverlogin.component.html',
  styleUrls: ['./driverlogin.component.css']
})
export class DriverloginComponent implements OnInit{
  constructor(private router:Router){

  }
  public driverdetails=new DriverDetails;
  ngOnInit(): void {
    
  }
  OnSubmit(form:NgForm){
    if(form.valid){
      this.router.navigateByUrl('/driver');
    }
    else{
      alert("Invalid Credentials!!!");
    }
  }

}
