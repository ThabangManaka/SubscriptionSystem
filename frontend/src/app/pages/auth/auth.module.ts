import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { AuthPageComponent } from './containers/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginFormComponent,
    SignFormComponent,
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class AuthModule { }
