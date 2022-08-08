import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './http.service';
import { User } from './user.model';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  users: User[] = [];
  service: HttpService;
  constructor(service: HttpService) {
    this.service = service;
  }
  ngOnInit(): void {
  }
  submitForm(form: NgForm) {
    var user: User = form.value
    // var user: any;
    // console.log(form.value.firstName);
    // user.firstName = form.value.firstName;
    // user.lastName = form.value.lastName;
    // user.email = form.value.email;
    // user.phoneNumber = form.value.phoneNumber;
    // console.log(user);
    console.log(user);
    this.service.postUser(user);
  }
  getUsers() {
    this.service.getUsers();
  }
}
