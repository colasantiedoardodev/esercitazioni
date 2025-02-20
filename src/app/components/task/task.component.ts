import { Component } from '@angular/core';
import { Task, TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  template: `
    <div>
      <input #taskInput type="text" placeholder="Nuova attività" />
      <button (click)="addTask(taskInput)">Aggiungi</button>
    </div>

    <ul>
      <li *ngFor="let task of tasks">
        <input
          type="checkbox"
          [checked]="task.completed"
          (change)="toggleTask(task.id)"
        />

        {{ task.title }}
      </li>
    </ul>
  `,
  styles: [],
})
export class TaskComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(input: HTMLInputElement) {
    if (input.value.trim()) { 
      this.taskService.addTask(input.value); 
      input.value = ''; 
    } 
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id); 
  }
}
