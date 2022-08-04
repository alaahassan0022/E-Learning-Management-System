import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialsComponent } from './materials/materials.component';
import { C2Component } from './c2/c2.component';
import { FirebaseServiceService } from './Services/firebase-service.service';
import { Observable } from 'rxjs';
import { user } from './c3/c3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //@ViewChild (C2Component) m!:C2Component;/
  title = 'Project';
  o:Observable<user>;
  u:Observable<user>;
  trial:any;
  ret:any;
  constructor(private stud:FirebaseServiceService){}

    ngOnInit(){
      this.stud.getStudents().subscribe((response)=>{console.log(response);});
      // this.ret = this.g();
      // console.log(this.ret);
      /*
      this.getWeather.getUsers().subscribe( 
        (res: any) => this.users = Object.keys(res).map((key) => { return res[key] console.log(this.users); } 

      
      */
  }
g():any{
  this.stud.getStudents().subscribe(
    (res: any) => this.trial 
    = Object.keys(res).map((key) => { return res[key]})); 
    
    
    console.log(this.trial);
}

}
