import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Comprare il latte', completed: false },
    { id: 2, title: 'Finire il report', completed: true },
  ];

  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  tasks$ = this.tasksSubject.asObservable();

  addTask(title: string) {
    
  }

  toggleTask(id: number) {

  }
}
