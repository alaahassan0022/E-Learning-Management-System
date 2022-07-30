import { Component, OnInit } from '@angular/core';
import { CourseArr } from '../Services/course-reg-srvc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export class user{
  Name:string;
  Email:string;
  Password:string;
  Courses:string;
  Grades:string;
  constructor(name:string,email:string,Password:string,c:string,g:string){
    this.Name=name;
    this.Email=email;
    this.Password=Password;
    this.Courses=c;
    this.Grades=g;
   //let arr:string[]=c.split(',');
    // for(var i =0;i<arr.length;i++){
    //   this.courses.push({name:c[i],img_src:'',credit_hrs:'',enrolled:'T'});
    // }
  }

}

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})

export class C3Component implements OnInit {
public static register:user[]=[];
public static uns :String []=[];
public myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  Username:string="";
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
      
    });
  }
  public options : string[]=["Software Engineering" ,"Bio Informatics" , "Ai"]
add(){
  //console.log(this.Username);
  let Name = this.myForm.value.name;
  let Email = this.myForm.value.Email;
  let Password = this.myForm.value.password;
  let u :user = new user(Name,Email,Password,"","") ;
  
  C3Component.register.push(u);
  C3Component.uns.push(u.Name);
  console.log(u);

}
}
