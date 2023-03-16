import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { routes } from 'src/app/consts/routes';
import { User } from 'src/app/pages/auth/models/user';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
public user$: Observable<User>

  //user$: any;
  userLoggeInd: any;
  public routers: typeof routes = routes;
  constructor( private userService: AuthService, private router: Router) {
  ///this.user$ = this.userService.getUser();
  //this.user$ = localStorage.getItem('currentUser');

  console.log(this.user$)
  }


  user() {

    this.userLoggeInd= localStorage.getItem("currentUser")

    return this.userLoggeInd
    }

  public signOut(): void {
    this.userService.signOut();

    this.router.navigate([this.routers.LOGIN]);
  }

}
