import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  refs = [1,2];

  selectedUser;
  users = [];  
  todos = [];
  usersEndPoint = "https://jsonplaceholder.typicode.com/users";
  toDoEndPoint = "https://jsonplaceholder.typicode.com/todos";
  
  constructor(private http: HttpClient){
      http.get(this.usersEndPoint).subscribe((result: Array<any>) => this.users = [...result]);
      http.get(this.toDoEndPoint).subscribe((result: Array<any>) => this.todos = [...result]);
  }

  selectUser(userId) {
    this.selectedUser = userId;
  }

}
