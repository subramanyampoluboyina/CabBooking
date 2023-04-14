import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/userdetails';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constructor(private service:UserdetailsService, private router:Router){

  }
  public userdetails=new UserDetails;
  public clicked:boolean | undefined;
  ngOnInit(): void {
    
  }
  OnSubmit(form:NgForm){
    if(form.valid){
      if(this.userdetails.source != this.userdetails.destination){
        this.service.addBookingDetails(this.userdetails).subscribe(data=>{
        })
        alert("Your ride is booked.\nCheck the status in My Bookings.");
      }
    }
    else{
      alert("Provide sufficient information!!!");
    }
  }
  calculateFare(form:NgForm){
    if(form.valid){
      if(this.userdetails.source != this.userdetails.destination){
        this.userdetails.fare=Math.round(1500 + Math.random() * 500);
        this.clicked=true;
      }
    }
  }

}
