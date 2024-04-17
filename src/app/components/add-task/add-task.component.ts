import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  constructor(private taskService: TaskService) {}
  saveTask(
    name: HTMLInputElement,
    description: HTMLTextAreaElement,
    date: HTMLInputElement
  ) {
    this.taskService.saveTask(name.value, description.value, date.value);
  }
}
