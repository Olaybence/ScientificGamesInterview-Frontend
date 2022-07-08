import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  
  // TODO: Maybe service, or store the status in a cookie
  loggedIn: Boolean = false;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loggedIn = this.usersService.isLoggedIn();
    if(this.loggedIn) {
      this.router.navigate(['/game']);
    }
    console.log("loggedIn",this.loggedIn);
  }

}
