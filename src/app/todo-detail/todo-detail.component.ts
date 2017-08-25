import { TODOS } from './../todos';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Input() todo: Todo;
  @Input() todos;

  constructor() { }

  ngOnInit() {
  }
  doneTask(todo: Todo) {
    if (todo.status === 'Done') {
      todo.status = 'Open';
    } else {
      todo.status = 'Done';
    }
  }
  deleteTask(todo: Todo) {
    this.todos = this.todos.filter((t) => {
      return t.id !== todo.id;
    });
  }
}
