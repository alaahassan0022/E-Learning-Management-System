import { Component, OnInit } from '@angular/core';
import { C3Component } from '../c3/c3.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginsrvService } from '../Services/loginsrv.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  
  users:[{username:String,password:String}]=[{username:"user1",password:"123"}];
  myForm: FormGroup;
 
  public static user:String;
  password:String;
  user1: String  = "";
  public b:boolean =true;
  constructor(private ls:LoginsrvService , private route:Router , private formBuilder: FormBuilder){

  }


  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]]
      
    });
    /* public formdata:FormGroup;
  ngOnInit() { 
  this.formdata = new FormGroup({ 
 Title: new FormControl("Angular Lab",
Validators.required )
     }); 
  }
 */
  }
  go(){
    if(this.ls.check(this.user1)){
      C2Component.user = this.user1;
      this.route.navigate(['/home']);
    }
    this.b=this.ls.check(this.user1);
	}
   


}
