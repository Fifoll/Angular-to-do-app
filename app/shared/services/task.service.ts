import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8085/api/task';
  private config = { withCredentials: true };

  constructor(private http: HttpClient) { }


  getAllTasks() {
    return this.http.get(this.apiUrl + '/all', {...this.config});
  }


  addTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl + '/add', task, {...this.config});
  }

}

