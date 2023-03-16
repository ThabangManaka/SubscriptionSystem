
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from '../consts/routes';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  public routers: typeof routes = routes;
  constructor(private authService: AuthService, private router: Router,
    private alertify: AlertifyService ) { }

  ngOnInit(): void {
    this.myForm= new FormGroup({
      UserName: new FormControl('' ,[Validators.required]),

      Password: new FormControl('', [Validators.required]),

    });
  }

  onSubmit(form: any) {

  //   this.authService.login(form.value).subscribe((result: any) => {
  //     if (result !=null) {
  //       console.log(result)

  //       localStorage.setItem('currentUser', JSON.stringify(result));
  //      this.router.navigate([this.routers.HOME]);
  //     }

  //   },
  //     error =>{
  //       this.alertify.error('Something went wrong, Try again');
  //      } )

 }
}
