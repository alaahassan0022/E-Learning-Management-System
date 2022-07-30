import { Template } from '@angular/compiler/src/render3/r3_ast';
import { isExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import { C1Component } from '../c1/c1.component';
import { C2Component } from '../c2/c2.component';
import { CourseArr, CourseRegSrvcService } from '../Services/course-reg-srvc.service';
// import { Course } from '../view-courses/view-courses.component';
// import { Course } from '../view-courses/view-courses.component';
import { FirebaseServiceService } from '../Services/firebase-service.service';
import { LoginsrvService } from '../Services/loginsrv.service';
import { VcsService } from '../Services/vcs.service';
@Component({
  selector: 'app-course-reg',
  templateUrl: './course-reg.component.html',
  styleUrls: ['./course-reg.component.css']
})
export class CourseRegComponent implements OnInit {
  //hours
  //static arrays
  //
  title = "List of courses";
    credit_hours:number;// = LoginsrvService.cur_username.Courses.split(',').length * 4;
    public static courses:CourseArr[];
    courses2:any;
    static n = 0;
    constructor(service : CourseRegSrvcService , private fb: FirebaseServiceService, private vcs: VcsService) { 
  
      //let service = new CoursesService();
    // if(CourseRegComponent.n==0){
      CourseRegComponent.courses = service.getCourses();
      //this.credit_hours = LoginsrvService.cur_username.Courses.split(',').length * 4;
    //   CourseRegComponent.n=1;
    // }
    
    
    let arofstr:String[]=[];
    if(LoginsrvService.cur_username.Courses!=""){
      //
      arofstr=LoginsrvService.cur_username.Courses.split(',');
      for (var j=0;j< arofstr.length;j++){
        for(var i=0;i<CourseRegComponent.courses.length;i++){
          if(arofstr[j]==CourseRegComponent.courses[i].name){
          CourseRegComponent.courses[i].enrolled='T';
          //this.credit_hours+=Number(CourseRegComponent.courses[i].credit_hrs);
          //this.credit_hours+=4;
          break;
        }
         
        }
      }
    }
    
    
    this.courses2 = CourseRegComponent.courses;
    //this.credit_hours = arofstr.length * 4;
      
  }
  
    
  log(v: string) {
    console.log(v);
}
toNum(s: string) {
    return Number(s);
}
add(crs: CourseArr){

    let crs2:CourseArr = new CourseArr(crs.name,crs.img_src,crs.credit_hrs,crs.enrolled);
    
     if(crs.enrolled=='F'&& this.credit_hours+Number(crs.credit_hrs) <=19){
      crs.enrolled='T';
      this.credit_hours+=Number(crs.credit_hrs);
    }
    
  }

rem_calc_new_credit_hours (is_enrolled: string, hrs: string) {
    if (is_enrolled == 'F') return this.credit_hours;
    else return this.credit_hours - Number(hrs);
}
rem_calc_new_enrollment_status(is_enrolled: string) {
    //if (is_enrolled == 'T') return 'F';
    return 'F';
}
htmlToAdd:any;
enroll_courses() {
    if (12 <= this.credit_hours && this.credit_hours <= 19) {
      
      this.htmlToAdd = 'Enrolled!'; 
      let stud_crs:any  = this.vcs.getstrofcrs(C2Component.user); 

      //if(stud_crs!="")stud_crs=stud_crs+",";
      stud_crs = "";//important edit1
      
      for(var i=0 ;i< CourseRegComponent.courses.length ;i++){
        if(CourseRegComponent.courses[i].enrolled=='T'){
          stud_crs+= CourseRegComponent.courses[i].name ;
          if(i!= CourseRegComponent.courses.length -1) {
            stud_crs += ",";
          }
        }
      }
      console.log(LoginsrvService.cur_username.Courses);
      LoginsrvService.cur_username.Courses=stud_crs;
      this.fb.updateStudent(LoginsrvService.cur_username,LoginsrvService.cur_userid).subscribe((response)=>{console.log(response);});

    }
    else{
      this.htmlToAdd = 'Min: 12, Max:19!'; 
    }
}
  ngOnInit(): void {
    const x = LoginsrvService.cur_username.Courses.split(',');
    this.credit_hours = 0;//important edit2
    for (let i=0;i<x.length;++i) {
      if (x[i] != "") this.credit_hours += 4;
    }
    //this.credit_hours = LoginsrvService.cur_username.Courses.split(',').length * 4;
  }

}
// export class CourseService {
//   name = "intro";
//   img_src = "intro.jpg";
//   credit_hrs = "4";
//   enrolled = "T";
//   getData () {
//       var ret: any[];
//       ret = ["intro", "intro.png", "4", "T"];
//       return ret;
//   }
//   /*constructor(a: string, b: string, c: number) {
//       this.name = a;
//       this.img_src = b;
//       this.credit_hrs = c;
//   }*/
// }