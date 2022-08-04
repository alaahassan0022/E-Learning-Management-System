import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { user } from '../c3/c3.component';
import { Observable, retry, catchError, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
      
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})};

  constructor(private http:HttpClient) { }

  url='https://ui-project-76593-default-rtdb.firebaseio.com/';

  
  getStudents():Observable<user>{
    return this.http.get<user>(this.url + 'Students-alaa.json',this.httpOptions);
  }

  getStudent(id:any):Observable<user>{
    return this.http.get<user>(this.url + 'Students-alaa/'+id+'.json/',this.httpOptions);
  }

  createStudent(stud:any):Observable<user>{
    return this.http.post<user>(this.url  + 'Students-alaa.json/',JSON.stringify(stud) ,this.httpOptions);
  }
  updateStudent(stud:any, id:any):Observable<user>{
    
   return this.http.put<user>(this.url + 'Students-alaa/'+id+'.json' , JSON.stringify(stud) ,this.httpOptions);
  }
  deleteStudent(id:any){
    
    return this.http.delete<user>(this.url + 'Students-alaa/'+id+'.json'  ,this.httpOptions);
   }
}
