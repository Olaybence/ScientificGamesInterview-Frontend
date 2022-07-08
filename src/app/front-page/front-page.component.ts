import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { User } from 'src/utils/user';

import { FormBuilder, FormControl, Validators } from '@angular/forms';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  nameControl = new FormControl();
  pwdControl = new FormControl();
  login = this.formBuilder.group({
    name: this.nameControl,
    pwd: this.pwdControl,
  });

  users: User[] = [];
  hide: boolean = true;
  wrongPassword: boolean = false;

  constructor(
    private http: HttpClient,
    private usersService: UsersService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      response => {
        this.users = response; // Get the users
        console.log(this.users);
      },
      error => console.log("No users found on server!")
    );
  }

  onSubmit(): void {
    // Process checkout data here
    console.log("this.login.value.pwd", this.login.value.pwd);
    console.log("this.login.value.name",this.login.value.name);
    let pwd = this.login.value.pwd;
    let name = this.login.value.name;
    this.login.reset();

    console.log("pwd",pwd);
    console.log("name",name);

    this.usersService.checkPassword(`${name}/${pwd}`).subscribe(
      response => {
        if(response) {
          console.log("The server ACCEPTED the password: ", response);
          this.router.navigate(['/game']);
        } else {
          console.log("The server said it was an INCORRECT password: ", response);
          this.errorMessage();
        }
      }
    )
    
  }

  errorMessage() {
    console.log("Incorrect username or password!");
    this.wrongPassword = true;
    let that = this;
    setTimeout(function() {
      that.wrongPassword = false;
    },1500);
    // TODO: better error message
  }
}
