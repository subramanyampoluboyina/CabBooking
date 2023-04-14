import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../models/userdetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private http:HttpClient) { }
  getBookingDetails():Observable<UserDetails>{
    return this.http.get<UserDetails>('http://localhost:8081/userDetails');
  }
  addBookingDetails(userdetails: any){
    return this.http.post('http://localhost:8081/addUserDetails', userdetails);
  }
  // removeDetails(id: any){
  //   return this.http.delete(`http://localhost:3000/userdetails/${id}`)
  // }
  addStatus(userdetails: any){
    return this.http.post('http://localhost:3000/userDetails', userdetails);
  }
}
