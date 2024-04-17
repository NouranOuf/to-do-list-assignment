import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
})
export class TaskDetailsComponent implements OnInit {
  taskId: any;
  task: any;
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.tasks[this.taskId];
  }
  updateTask(newName: any, newDescription: any, newDate: any) {
    this.task.updateTask(this.taskId, newName, newDescription, newDate);
  }
  taskDelete() {
    this.taskService.deleteTask(this.taskId);
    this.router.navigate(['/']);
  }
}
