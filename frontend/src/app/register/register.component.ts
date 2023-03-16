import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as alertifyjs from 'alertifyjs';
import { AlertifyService } from '../services/alertify.service';
import { CustomValidators } from '../models/CustomValidators';
import { passwordMatch } from '../validators/passwordMatch';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerationForm: FormGroup;
  myForm: FormGroup ;

  userSubmitted: boolean;
  constructor(private fb: FormBuilder,private authService : AuthService,
    private alertify: AlertifyService ) { }

  ngOnInit(): void {
  //    this.myForm= new FormGroup({
  //     UserName: new FormControl('' ,[Validators.required]),
  //     Email: new FormControl('' ,[Validators.required, Validators.email]),
  //     Password: new FormControl('', [Validators.required]),
  //     PasswordKey: new FormControl('', [Validators.required]),
  //     confirmPassword: new FormControl(['', Validators.required]),
  //   });
  this.createRegisterationForm();
   }
createRegisterationForm() {
  this.registerationForm =  this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      passwordKey: [null, [Validators.required]],
  },     [passwordMatch('password', 'passwordKey')]);
}

// passwordMatchingValidatior(fg: FormGroup): Validators {
//   return fg.get('password').value === fg.get('confirmPassword').value ? null :
//       {notmatched: true};
// }

// passwordMatchingValidatior(form: FormGroup): null => {
//   const password = form.controls['password'].value;
//   const confirmation = form.controls['confirmPassword'].value;

//   if (!password || !confirmation) {
//     return null;
//   }

//   if (confirmation.length > 0 && confirmation !== password) {
//     confirmation.setErrors({ notMatch: true });
//   }

//   return null;
// }


public validateAreEqual(c: AbstractControl): {notSame: boolean} | null {
  return  c.value.password  ===  c.value. passwordKey ? null : {notSame: true};
}


  onSubmit() {
//   console.log(this.registerationForm.value)
//   this.userSubmitted = true;
//   if (this.registerationForm.valid) {

//     this.authService.registerUser(this.registerationForm.value).subscribe(() =>
//     {
//         this.onReset();
//         this.alertify.success('Congrats, you are successfully registered');
//     });
// }
  }


  onReset() {
    this.userSubmitted = false;
    this.registerationForm.reset();
}

  get passwordMatchError() {
    return (
      this.registerationForm .getError('mismatch') &&
      this.registerationForm .get('confirmPassword')?.touched
    );
  }

      // ------------------------------------
    // Getter methods for all form controls
    // ------------------------------------
    get userName() {
      return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
      return this.registerationForm.get('email') as FormControl;
  }
  get password() {
      return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
      return this.registerationForm.get('confirmPassword') as FormControl;
  }

  // ------------------------


}
