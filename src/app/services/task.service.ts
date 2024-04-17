import { Injectable } from '@angular/core';
import { Task } from '../models/task';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    // {name:"a" , description:"a" , dueDate:'20-20-2020',status:"done"},
  ];
  constructor() {}
  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
  saveTask(name: string, description: string, date: string) {
    this.tasks.push({
      name,
      description,
      dueDate: date,
      status: 'pending',
      color: 'red',
    });
  }
  markDone(i: number) {
    this.tasks[i].status = 'completed';
    this.tasks[i].color = 'green';
  }
  updateTask(id: number, newName: any, newDescription: any, newDate: any) {
    this.tasks[id].name = newName;
    this.tasks[id].description = newDescription;
    this.tasks[id].dueDate = newDate;
  }
}
