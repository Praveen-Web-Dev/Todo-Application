import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { Task } from '../Models/task.model';
import { TaskService } from '../task.service';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [FormsModule, NgIf,],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {
  @Output() close = new EventEmitter<void>();

  newTask: Task ={title: '', description: '', dueDate: '' , isCompleted: false};
  
  constructor(private taskService: TaskService){}
 
  onSubmit(){
    this.taskService.createTask(this.newTask).subscribe({
      next: () => {
        console.log('Task Added Successfully');
        this.close.emit();//close modal after adding task
      },
      error:(err) =>{
        console.error('Error adding task', err);
      }
    });

  }

  closeDialog(){
    this.close.emit();
  }
}
