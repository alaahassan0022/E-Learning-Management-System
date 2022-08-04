import { Injectable } from '@angular/core';
import {Course} from '../view-courses/view-courses.component';
import { CourseRegComponent } from '../course-reg/course-reg.component';
import { CourseRegSrvcService } from './course-reg-srvc.service';
import { LoginsrvService } from './loginsrv.service';
@Injectable({
  providedIn: 'root'
})
export class VcsService {

  constructor(private cr:CourseRegSrvcService) { }
getstrofcrs(nm:String):String[]{

  let CoursesListString:String="";
  let arrayofstring:String[]=[];
  for(var i =0 ;i<  LoginsrvService.arr.length ; i++){

    if( LoginsrvService.arr[i].Name==nm){
      CoursesListString=LoginsrvService.arr[i].Courses;
      console.log(CoursesListString);

    }
  }
  
  arrayofstring=CoursesListString.split(",");
return arrayofstring;
}

  getallcourses(): Course[]{
    let courses:Course[]=[]; 
      for(let c of this.cr.getCourses()){
        courses.push(new Course (c.name));
      }
    return courses;
  }


  getcourses(): Course[]{
    let courses:Course[]=[]; 
    if(CourseRegComponent.courses != null){
      for(let c of CourseRegComponent.courses){
        if(c.enrolled=='T')
          courses.push(new Course (c.name));
      }
    }
    return courses;
  }
}


 // =[
    //   new Course('Python Core'),
    //   new Course('C++'),
    //   new Course('CSharp'),
    //   new Course('Java'),
    //   new Course('JavaScript'),
    //   new Course('CSS'),

    // ];

  // =[
    //   new Course('Python Core'),
    //   new Course('C++'),
    //   new Course('CSharp'),
    //   new Course('Java'),
    //   new Course('JavaScript'),
    //   new Course('CSS'),

    // ];

   // if(CourseRegComponent.courses != null){