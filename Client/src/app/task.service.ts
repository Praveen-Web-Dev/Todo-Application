import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from './Models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = "http://localhost:5257/api/";
  private http  = inject(HttpClient)
  

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.baseUrl+'task');
  }

  createTask(task:Task){
    return this.http.post<Task>(`${this.baseUrl}task`,task);
  }

}
