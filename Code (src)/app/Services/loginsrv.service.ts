import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { C3Component } from '../c3/c3.component';
import { FirebaseServiceService } from './firebase-service.service';
import { user } from '../c3/c3.component';



@Injectable({
  providedIn: 'root'
})
export class LoginsrvService {
  b:any=false;
  public static users :String[]=["user1","admin","hana"];
  //users = C3Component.uns;

  public static arr :user[]=[];
  public static Users_id :string[]=[];
   
  public static cur_userid :string;
  public static cur_username :user;

  constructor(private fb:FirebaseServiceService) {
      let m:any;
       m =this.fb.getStudents().subscribe(
         (res: any) => 
         {Object.keys(res).map((key) => 
          {LoginsrvService.Users_id.push(key);})});
      
      this.fb.getStudents().subscribe(
        (response)=>{LoginsrvService.arr=Object.values(response);
          console.log(LoginsrvService.arr);
          console.log(LoginsrvService.arr[1].Name);
          console.log(LoginsrvService.arr.length);
          console.log(this.b); 
          
      });
    
   }
  public check(s:String) : boolean{
    this.b =false;
    for(var i =0;i<LoginsrvService.arr.length;i++){
      if(LoginsrvService.arr[i].Name==s){
        console.log(LoginsrvService.arr[i].Name);    
        this.b=true;
        console.log(this.b); 
        LoginsrvService.cur_userid=LoginsrvService.Users_id[i];
        LoginsrvService.cur_username =LoginsrvService.arr[i];
        console.log(LoginsrvService.cur_username.Courses);
        console.log(LoginsrvService.cur_username.Grades);
        //  console.log(LoginsrvService.cur_userid);
        break; 
      }
    }
    if(s=="admin"){
      this.b=true;
    }

    console.log(this.b);
    return this.b;
      
  }
  
}

  //   let k:user[] = [];
  //   let x:Observable<user>;
  //   let m:any;
  //  m =this.fb.getStudents().subscribe(
  //     (res: any) => {
  //      Object.keys(res).map((key) => {let u=new user(res[key]["Name"],res[key]["Email"],res[key]["Password"],res[key][res[key]["Courses"]])
  //      k.push(u);
  //     })});
  //     x= this.fb.getStudents();
  //     console.log(x);

    //arr=k.splice(0,1);
    //console.log(k);
    
    // async getUsers() {
    //   this.allUsers = await this.service.getAllUsers();
    //   console.log(this.allUsers);
    //   
 //this.fun(s);
    
      
  //   for(var i =0;i<arr.length;i++){
  //     if(arr[i].Name==s){
  //       return true;
  //     }
  //  }



//   async fun(s:String):Promise<boolean>{
//   let arr :user[]=[];
//   await this.fb.getStudents().subscribe((response)=>{
// 1
//   arr=Object.values(response);
//   console.log(arr);
//   console.log(arr[1].Name);
//   console.log(arr.length);
  
//   for(var i =0;i<arr.length;i++){
//     if(arr[i].Name==s){
//     console.log(arr[i].Name);    
//     this.b=true;
//     console.log(this.b);  
//   break; 
   
//   }
  //}
  //
  //console.log(this.b); 
  
  //});
  //return this.b ;
 //}
