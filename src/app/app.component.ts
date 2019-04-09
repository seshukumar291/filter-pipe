import { Component, ChangeDetectorRef, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{

  refs = [1];

  selectedUser;
  users = [];  
  todos = [];
  selectedTodos = [];
  usersEndPoint = "https://jsonplaceholder.typicode.com/users";
  toDoEndPoint = "https://jsonplaceholder.typicode.com/todos";
  
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef){
      http.get(this.usersEndPoint).subscribe((result: Array<any>) => this.users = [...result]);
      http.get(this.toDoEndPoint)
      .pipe(
        map(
          (todos: Array<any>) => todos.map(todo => {
            return {
              userId: todo.userId,
              id: todo.id,
              title: todo.title,
              isEdit: false
            } 
          })
         )
      )
      .subscribe((result: Array<any>) => this.todos = [...result]);

  }

  ngOnInit(){
    
  }

  addTodo(userId, title) {
      this.selectedTodos.push({userId, title, isEdit: false});
  }

  selectUser(userId) {
    this.selectedUser = userId;
  }

  editRow(index) {
    this.selectedTodos[index].isEdit = true;
  }

  updateRow(userId, titleId, index){
    this.selectedTodos[index].userId = userId;
    this.selectedTodos[index].title = titleId;
  }

}
