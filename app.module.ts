import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { C2Component } from './c2/c2.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { C3Component } from './c3/c3.component';
import { HomeComponent } from './home/home.component';
import { MaterialsComponent } from './materials/materials.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
import { GradesComponent } from './grades/grades.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { Routes, RouterModule } from '@angular/router';
import { materialize } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { CourseRegComponent } from './course-reg/course-reg.component';
import { FormBuilder } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';
import { ScoresComponent } from './scores/scores.component';
import { ShowScoresComponent } from './show-scores/show-scores.component';

const routes: Routes = [{ path: 'Register', component: C3Component },
{ path: 'home', component: HomeComponent },
{ path: '', component: C2Component },
{ path: 'courses', component: ViewCoursesComponent },
{ path: 'materials', component: MaterialsComponent },
{ path: 'grades', component: GradesComponent },
{ path: 'register-request', component: AdminComponent },
{ path: 'course-registration', component: CourseRegComponent },
{ path: 'show-scores', component: ScoresComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    HomeComponent,
    MaterialsComponent,
    GradesComponent,
    ViewCoursesComponent,
    AdminComponent,
    CourseRegComponent,
    ScoresComponent,
    ShowScoresComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    MatSelectModule,

    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [C2Component,CourseRegComponent,FormBuilder],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
