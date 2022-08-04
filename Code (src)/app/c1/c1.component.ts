import { Component, OnInit } from '@angular/core';
import { C2Component } from '../c2/c2.component';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  name : String ;
  a : String  = "admin";

  constructor() { }

  ngOnInit(): void {
    this.name = C2Component.user;
  
  }

}
