import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { task } from './Models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = "http://localhost:5257/api";
  private http  = inject(HttpClient)
  

  getTasks(){
    return this.http.get<task>(this.baseUrl+'task');
  }

}
