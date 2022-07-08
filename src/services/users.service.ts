import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/utils/user';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];

  constructor(
    private http: HttpClient 
  ) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/users");
    // return this.users;
  }

  // Haven't used, haven't checked. Might work tho. #TODO
  lookupUserByName(name: string) : Observable<User> {
    const user = this.users.find(
      (s) => {
        return s.name === name;
      }
    );
    return EMPTY;
  }

  checkPassword(nameAndPwd: string) {
    console.warn("Password check - http://localhost:8080/users/" + nameAndPwd);
    return this.http.get<Boolean>("http://localhost:8080/users/" + nameAndPwd);
    // return this.http.get<Boolean>("http://localhost:8080/users/Sanyi/sanyiPwd42");
  }

  isLoggedIn() {
    return false;
    // TODO: implement
  }
}
