import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.myForm= new FormGroup({
      UserName: new FormControl('' ,[Validators.required]),

      Password: new FormControl('', [Validators.required]),

    });
  }

  onSubmit(form: any) {

    this.authService.login(form.value).subscribe(result => {
      if (result !=null) {
        console.log(result)

        //localStorage.setItem('currentUser',  result);
       this.router.navigate(['home']);
      }
    } )

  }
}
