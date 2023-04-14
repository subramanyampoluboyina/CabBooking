import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-usermybookings',
  templateUrl: './usermybookings.component.html',
  styleUrls: ['./usermybookings.component.css']
})
export class UsermybookingsComponent implements OnInit {
  constructor(private service:UserdetailsService){

  }
  public userdetails: any;
  ngOnInit(): void {
    this.getBookingDetails();
  }
  getBookingDetails(){
    this.service.getBookingDetails().subscribe(data=>{
      this.userdetails=data;
    })
  }
  

}

