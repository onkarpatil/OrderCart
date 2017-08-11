import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/todo/todo.service';
import { ToDo } from '../services/todo/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: any;
  todo = new ToDo();
  constructor(private _todoService: ToDoService) { }

  ngOnInit() {
    this._todoService.getTodoList().subscribe(data => this.todoList = data);
  }

  addToDo() {
    let result = this._todoService.addTodoItem(this.todo).subscribe(data => console.log(data));
    this.todo = new ToDo();
  }

}
