import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { C3Component } from '../c3/c3.component';
import { FirebaseServiceService } from './firebase-service.service';
import { user } from '../c3/c3.component';



@Injectable({
  providedIn: 'root'
})
export class LoginsrvService {
  userExists:any=false;
  public static users :String[]=["admin","hana","alaa"];
  //users = C3Component.uns;

  public static arr :user[]=[];
  public static Users_id :string[]=[];
   
  public static cur_userid :string;
  public static cur_username :user;

  constructor(private fb:FirebaseServiceService) {
   
    
   }
   ngOnint(){
    let m:any;
    m =this.fb.getStudents().subscribe(
      (res: any) => 
      {Object.keys(res).map((key) => 
       {LoginsrvService.Users_id.push(key);})});
   
   this.fb.getStudents().subscribe(
     (response)=>{LoginsrvService.arr=Object.values(response);
       console.log(response);
       console.log(this.userExists); 
       
   });
   }
  public check(s:String) : boolean{
    
    this.userExists=false;
    for(var i=0;i<LoginsrvService.arr.length;i++){
      if(LoginsrvService.arr[i].Name==s){
        console.log(LoginsrvService.arr[i].Name);    
        this.userExists=true;
        console.log(this.userExists); 
        LoginsrvService.cur_userid=LoginsrvService.Users_id[i];
        LoginsrvService.cur_username =LoginsrvService.arr[i];
        console.log(LoginsrvService.cur_username.Courses);
        console.log(LoginsrvService.cur_username.Grades);
        //  console.log(LoginsrvService.cur_userid);
        break; 
      }
    }
    if(s=="admin"){
      this.userExists=true;
    }

    console.log(this.userExists);
    return this.userExists;
      
  }
  
}