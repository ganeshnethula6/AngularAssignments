import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  postUser(user: User) {
    this.http.post('https://gradious-652ba-default-rtdb.firebaseio.com/user.json', user).subscribe(responseData => {
      console.log(responseData);
    });
  }
  getUsers(): User {
    let user!: User;
    this.http.get('https://gradious-652ba-default-rtdb.firebaseio.com/user.json').subscribe(response => {
      console.log(response);
    })
    return user;
  }
  getUser(id: number) {

  }
  deleteUser(id: number) {

  }
  deleteUsers() {

  }
  updateUser(id: number, user: User) {

  }
}
