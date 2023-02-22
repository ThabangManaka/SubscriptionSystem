import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { routes } from '../consts/routes';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public routers: typeof routes = routes;

  constructor(private authService: AuthService,
    private router : Router){}
  canActivate():any {
    if (this.authService.isLoggedIn()) {
      return true;

      }
      else  {false;
        this.router.navigate([this.routers.LOGIN]);
      }
    }
  }
