import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {IUser} from "../user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: IUser;
  user1: IUser;

  constructor(private router: Router, private route: ActivatedRoute, private  userService: UserService) {
  }

  ngOnInit(): void {

  }

  cc() {
      this.router.navigate(['/users']).then(r => console.log(r));
  }

}
