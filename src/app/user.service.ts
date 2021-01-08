import {Injectable} from '@angular/core';
import {IUser} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {id: 1, name: "majid"},
    {id: 2, name: "sara"},
    {id: 3, name: "mom"},
  ];

  getUser(id: number) {
    debugger
    let userTemp: IUser;
    userTemp = this.users.find((u) => {
      return u.id == id;
    });
    return userTemp;
  }

  getUsers() {
    return this.users;
  }

  constructor() {
  }
}
