import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDo } from './todo';



@Injectable()
export class ToDoService {

    constructor(private _http: HttpClient) { }

    getTodoList() {
        return this._http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos');
    }

    addTodoItem(item: ToDo) {
        return this._http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', item);
    }

}
