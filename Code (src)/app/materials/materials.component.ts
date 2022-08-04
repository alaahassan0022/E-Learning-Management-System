import { Component, OnInit, ViewChild } from '@angular/core';
import { C2Component } from '../c2/c2.component';
import { VcsService } from '../Services/vcs.service';
import { Course } from '../view-courses/view-courses.component';
import { LoginsrvService } from '../Services/loginsrv.service';
export class Material {
  name: string;
  constructor(name:string){

    this.name=name;
  }
}

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
 // m:Course;
  material: Course;
  materialsList: Course[] = []
  materialsListuser: Course[] = []
  materialsListString  :String;
  arrayofstring:String[]=[];


  name : String ;
  public a="admin";
  public ad:boolean;
  constructor(private vcs:VcsService, private  ff : C2Component) {
     
  }
  

  ngOnInit(): void {
    this.materialsList= this.vcs.getallcourses();
    this.resetForm();
  
    this.name = C2Component.user;
    console.log(this.name);
    // if(this.name!="admin")
      this.show_materials_for_user();
  }

  show_materials_for_user(){
    
    
    this.arrayofstring=this.vcs.getstrofcrs(this.name);
    console.log(this.arrayofstring);
    console.log(this.materialsList);
    for(var j =0; j<this.materialsList.length;j++){
      for(var x =0; x<this.arrayofstring.length;x++){
        if(this.materialsList[j].name==this.arrayofstring[x]){
          this.materialsListuser.push(new Course(this.arrayofstring[x].toString()));
          break;
        }
      }
    }
    console.log(this.materialsListuser);
}

  add() {
    this.materialsList.push(this.material);
    this.resetForm();
  }

  edit(index: number) {
    this.material = this.materialsList[index];
    this.delete(index);
  }

  delete(index: number) {
    this.materialsList.splice(index, 1);
  }

  resetForm() {
    this.material = { name: ''};
  }
}



 // @ViewChild (C2Component) h!:C2Component;
  //name = this.h.user;

    // // if(this.name=='admin'){
    //   this.ad=false;
    // }
    // else{
    //   this.ad=true; 
    // }


    // console.log(this.name);
    // for(var i =0 ;i<  LoginsrvService.arr.length ; i++){

    //   if( LoginsrvService.arr[i].Name== this.name){
    //     this.materialsListString=LoginsrvService.arr[i].Courses;
    //     console.log(this.materialsListString);

    //   }
    // }

    
  // course: Course;
  // coursesList: Course[] = []
  // CoursesListString  :String;
  // coursesListuser: Course[] = []