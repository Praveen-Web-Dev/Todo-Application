import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Task } from '../Models/task.model';
import { TaskService } from '../task.service';
import { NgModel } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from "../Header/header/header.component";
import { TaskCreateComponent } from "../task-create/task-create.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgIf, NgFor, HeaderComponent, TaskCreateComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  private taskService = inject(TaskService);
  tasks: Task[] = [];
  showModal=false;

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (response:Task[]) => {
        this.tasks = response;
      }, 
      error: error=> console.log(error),
    })
  }

  openTaskDialog(){
    this.showModal = true;
  }
  closeTaskDialog(){
    this.showModal =false;
  }

} 
