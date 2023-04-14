import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit{
  constructor(private service:UserdetailsService){

  }
  public userdetails: any;
  Accept:boolean=false;
  Reject:boolean=false;
  ngOnInit(): void {
    this.getBookingDetails();  
  }
  getBookingDetails(){
    this.service.getBookingDetails().subscribe(data=>{
      this.userdetails=data;
    })
  }
  // getStatus(e: any){
  //   alert(e.target.innerHTML);

  //   this.service.addStatus(this.userdetails.status).subscribe(data=>{

  //   })
  // }
}
