import { TODOS } from './todos';
import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todo: Todo = { id: 0, task: '', status: 'open' };
  todos: Todo[] = TODOS;
  addTask(t: Todo): void {
    this.todos.push({ id: this.todos.length, task: t.task, status: 'open' });
    console.log(this.todos);
  }
}
