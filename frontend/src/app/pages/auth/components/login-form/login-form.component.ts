
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserForLogin } from '../../models/user';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
 @Output() sendLoginForm = new EventEmitter<UserForLogin>();
  public form: FormGroup;
  public flatlogicEmail = 'thaba@gmail.com';
  public flatlogicPassword = 'Thabang';

  public ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl(this.flatlogicEmail, [Validators.required, Validators.email]),
      password: new FormControl(this.flatlogicPassword, [Validators.required])
    });
  }

  public login(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit(this.form.value);
    }
  }
}
