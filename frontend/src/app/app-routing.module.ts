import { SubscriptionPageComponent } from './pages/subscription/containers/subscription-page/subscription-page.component';
import { NewSubscriptionComponent } from './new-subscription/new-subscription.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {
    path: 'homes' , component : HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home' , component : HomeComponent,
    canActivate: [AuthGuard]
  },
  {
  path: '',
  pathMatch:'full',
  component: SubscriptionPageComponent
  },

  {
    path: 'login' ,
    loadChildren : () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'register' , component : RegisterComponent
  },

  {
    path: 'subscription/:id' , component : SubscriptionComponent
  },
  {
    path: 'new-subscription' , component : NewSubscriptionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
