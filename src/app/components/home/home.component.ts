import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public task: TaskService) {}
  deleteTask(i: number) {
    this.task.deleteTask(i);
  }
  markDone(i: number) {
    this.task.markDone(i);
  }
}
