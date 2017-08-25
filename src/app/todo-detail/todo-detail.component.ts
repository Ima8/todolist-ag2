import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Input() todo: Todo;

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
}
