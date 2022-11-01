import { Component, OnInit, ViewChild } from '@angular/core';
import { C3Component } from '../c3/c3.component';
import { LoginsrvService } from '../Services/loginsrv.service';
import { FirebaseServiceService } from '../Services/firebase-service.service';
import { user } from '../c3/c3.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  arr = C3Component.uns;
  constructor(private fb:FirebaseServiceService, private ls:LoginsrvService){}
  ngOnInit(): void {
  }

@ViewChild (C3Component) m!:C3Component;
public newreg(i:number)//accept
{
 //LoginsrvService.users.push(this.arr[i]);
 var un= this.arr[i];

 
 this.fb.createStudent(C3Component.register[i]).subscribe((response)=>{ this.arr.splice(i,1);console.log(response); this.ls.ngOnint();});
 //this.fb.getStudents().subscribe((response)=>{console.log(response);});
}

public rej(i:number)//reject
{
  var un= this.arr[i];
  this.arr.splice(i,1);
}

}

/* console.log(C3Component.register);
     
      for(let x of C3Component.register)
      {
        this.arr.push(x.Name);
      }
      console.log(this.arr);*/