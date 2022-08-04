import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseRegSrvcService {

  constructor() { }
  getCourses () {
    var courses : CourseArr[];
    //courses = [["cpp", "cpp.jpg", "T", "4"], ["java", "java.jpg", "F", "3"]];
    courses = [{name:'C++',img_src:'assets/img/C++.jpg',credit_hrs:'4',enrolled:'F'},
    {name:'CSharp',img_src:'assets/img/CSharp.jpg',credit_hrs:'4',enrolled:'F'},
    {name:'CSS',img_src:'assets/img/CSS.jpg',credit_hrs:'4',enrolled:'F'},
    {name:'Java',img_src:'assets/img/Java.jpg',credit_hrs:'4',enrolled:'F'},
    {name:'JavaScript',img_src:'assets/img/JavaScript.jpg',credit_hrs:'4',enrolled:'F'},
    {name:'Python Core',img_src:'assets/img/Python Core.jpg',credit_hrs:'4',enrolled:'F'}
    
  ];
    return courses;
}

}
export class CourseArr {
 public name='' ;
 public img_src='' ;
 public credit_hrs='';
 public enrolled='';
constructor(name:any,img_src:any,credit_hrs:any,enrolled:any){
  this.credit_hrs=credit_hrs;
  this.enrolled= enrolled;
  this.img_src=img_src;
  this.name=name;
}

}

// export class CourseComponent{

//   name: string;
//   img_src: string;
//   credit_hrs: string;
//   enrolled: string;


//   constructor(CS: CourseService) {
//     var data: any[];
//     data = CS.getData();
//     this.name = data[0];
//     this.img_src = data[1];
//     this.credit_hrs = data[2];
//     this.enrolled = data[3];
//   }
// }