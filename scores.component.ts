import { Component, OnInit } from '@angular/core';
import { user } from '../c3/c3.component';
import { LoginsrvService } from '../Services/loginsrv.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  u:user;
  grades:string;
  courses:string;
  arrgrades:string[];
  arrcourses:string[];
  constructor(private srv : LoginsrvService) { 

    
  }

  ngOnInit(): void {
    this.u = LoginsrvService.cur_username;
    this.grades=this.u.Grades;
    this.courses = this.u.Courses;
    this.arrgrades=this.grades.split(',');
    this.arrcourses = this.courses.split(',');

    console.log(this.courses);
    console.log(this.grades);

  }

}
