import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular To Do Application';
  toDoList = [];
  toDoItem = '';

  addItem() {
    this.toDoList.push(this.toDoItem);
  }

  deleteItem(index) {
    this.toDoList.splice(index, 1);
  }
}
