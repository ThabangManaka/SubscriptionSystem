
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/consts/routes';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  public routers: typeof routes = routes;
  constructor(private authService: AuthService,private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  public sendLoginForm(data :any): void {
   console.log(data)
   this.router.navigate([this.routers.HOME]);
    //  this.authService.login(data).subscribe(result => {
    //   if (result !=null) {
    //           console.log(result)

    //           localStorage.setItem('currentUser', JSON.stringify(result));
    //          this.router.navigate([this.routers.HOME]);
    //          }
    //  }, error =>{
    //       this.alertify.error('Something went wrong, Try again');
    //       });

    }

    sendSignForm(data :any): void {


     this.authService.registerUser(data).subscribe(() =>
     {

         this.alertify.success('Congrats, you are successfully registered');
    });

    }
}
