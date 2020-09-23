import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoArray = [];
  todo;
  todoForm;
  tests = [[[],1],[{ a: 1 },1],[{ a: 1, b: { c: 1 } },2],[{ a: 1, b: { c: 1 }, c: { d: 1 , e : { g : 1} } },3]]
  testResults=[];

  constructor() {
  }

  printObj(obj){
    return JSON.stringify(obj)
  }

  addTodo(value) {
    if (value !== "") {
      this.todoArray.push(value);
      this.todoForm.reset();
    } else {
      alert('Field required **');
    }
  }

  todoSubmit(value: any) {
    if (value !== "") {
      this.todoArray.push(value.todo);
    } else {
      alert('Field required **');
    }
  }

  calculateDepth(){
   this.testResults = this.tests.map((t) => this.getDepth(t[0])===t[1])

  }

  getDepth(input){
    return 0
  }


}
