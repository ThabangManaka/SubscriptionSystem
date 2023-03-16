import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './header/components/user/user.component';
import { HeaderComponent } from './header/containers/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SpinnerComponent } from './spinner/spinner.component';




@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    LayoutComponent,
    SpinnerComponent
  ],
  exports: [
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
