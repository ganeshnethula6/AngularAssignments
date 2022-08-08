import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  Lists: any[] = [];
  counter = 0;
  list: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  addList() {
    console.log(this.list);
    this.Lists.push(this.list)

  }
}
