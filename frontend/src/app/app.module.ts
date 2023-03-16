
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { SubscriptionModule } from './pages/subscription/subscription.module';
import { NewSubscriptionComponent } from './new-subscription/new-subscription.component';
import { SpinnerInterceptor } from './helpers/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SubscriptionComponent,
    NewSubscriptionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    SubscriptionModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [  {provide: HTTP_INTERCEPTORS, useClass:SpinnerInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
