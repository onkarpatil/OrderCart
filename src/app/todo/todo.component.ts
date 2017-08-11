import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/todo/todo.service';
import { ToDo } from '../services/todo/todo';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: any;
  todo = new ToDo();
  percentLoaded: number;
  constructor(private _todoService: ToDoService) { }

  ngOnInit() {
    // this._todoService.getData().subscribe(event => {
    //   if (event.type === HttpEventType.DownloadProgress) {
    //     this.percentLoaded = Math.round(100 * event.loaded / event.total);
    //   }
    //   else if (event instanceof HttpResponse) {
    //     console.log(event);
    //   }
    // });
    this._todoService.getTodoList().subscribe(data => this.todoList = data);
  }

  addToDo() {
    let result = this._todoService.addTodoItem(this.todo).subscribe(data => console.log(data));
    this.todo = new ToDo();
  }

}
