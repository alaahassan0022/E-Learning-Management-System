import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialsComponent } from '../materials/materials.component';
import { VcsService } from '../Services/vcs.service';
import { C2Component } from '../c2/c2.component';
import { LoginsrvService } from '../Services/loginsrv.service';
import { FirebaseServiceService } from '../Services/firebase-service.service';
import { CourseArr } from 'src/app/Services/course-reg-srvc.service';
import { CourseRegSrvcService } from '../Services/course-reg-srvc.service';
import { FormControl } from '@angular/forms';
import { user } from '../c3/c3.component';
import { StringLike } from '@firebase/util';
export class Course {

  name: string;
  
  constructor(name:string){

    this.name=name;
  }

}

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  u:user;
  uid:string;
  drop:string;
  stud_array : any =LoginsrvService.arr; 
  @ViewChild (MaterialsComponent) m!:MaterialsComponent;
  constructor(private vcs:VcsService , private fb:FirebaseServiceService ) { }
  
  //ad =this.m.ad;
   name : String ;
   a : String  = "admin";
    course: Course;
    coursesList: Course[] = []
    CoursesListString  :String;
    coursesListuser: Course[] = []

    //Allcourses:CourseArr[]=[];
    arrayofstring:String[]=[];


  ngOnInit(): void {
    
    this.coursesList=this.vcs.getallcourses();
    this.resetForm();
    this.name = C2Component.user;
    //this.Allcourses =this.CR.getCourses();

    if(this.name!="admin")
      this.show_courses_for_user();
  }
  show_courses_for_user(){
    console.log(this.name);
    for(var i =0 ;i<  LoginsrvService.arr.length ; i++){

      if( LoginsrvService.arr[i].Name== this.name){
        this.u=LoginsrvService.arr[i];
        this.uid=LoginsrvService.Users_id[i];
        this.CoursesListString=LoginsrvService.arr[i].Courses;
        console.log(this.CoursesListString);

      }
    }
    
    this.arrayofstring=this.CoursesListString.split(",");
    console.log(this.arrayofstring);
    console.log(this.coursesList);
    for(var j =0; j<this.coursesList.length;j++){
      for(var x =0; x<this.arrayofstring.length;x++){
        if(this.coursesList[j].name==this.arrayofstring[x]){
          this.coursesListuser.push(new Course(this.arrayofstring[x].toString()));
          break;
        }
      }
    }
    console.log(this.coursesListuser);
}


  show_courses(){
    console.log(this.drop);
    for(var i =0 ;i<  LoginsrvService.arr.length ; i++){

      if( LoginsrvService.arr[i].Name== this.drop){
        this.u=LoginsrvService.arr[i];
        this.uid=LoginsrvService.Users_id[i];
        this.CoursesListString=LoginsrvService.arr[i].Courses;
        console.log(this.CoursesListString);

      }
    }
    
    this.arrayofstring=this.CoursesListString.split(",");
    console.log(this.arrayofstring);
    console.log(this.coursesList);
    for(var j =0; j<this.coursesList.length;j++){
      for(var x =0; x<this.arrayofstring.length;x++){
        if(this.coursesList[j].name==this.arrayofstring[x]){
          this.coursesListuser.push(new Course(this.arrayofstring[x].toString()));
          break;
        }
      }
    }
    console.log(this.coursesListuser);
}
  add() {
    //this.coursesList.push(this.course);
    this.coursesListuser.push(this.course);
    this.resetForm();
  }

  edit(index: number) {
    //this.course = this.coursesList[index];
    this.course = this.coursesListuser[index];

    this.delete(index);
  }

  delete(index: number) {
    this.coursesListuser.splice(index, 1);
//    this.coursesList.splice(index, 1);

  }

  resetForm() {
    this.course = { name: ''};
  }

  done(){
    let str:string ="";
    for(var i=0;i<this.coursesListuser.length;i++){

      str+=this.coursesListuser[i].name;
      if(i!=this.coursesListuser.length-1)
      str+=","
    }
    this.u.Courses=str;
    console.log(this.u);
    this.fb.updateStudent(this.u,this.uid).subscribe((response)=>{console.log(response);});

  }
}
