import { MaterialModule } from './../../material.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPageComponent } from './containers/subscription-page/subscription-page.component';
import { ProductTableComponent } from './components/product-table/product-table.component';



@NgModule({
  declarations: [
    SubscriptionPageComponent,
    ProductTableComponent
  ],
  exports: [
    ProductTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ]
})
export class SubscriptionModule { }
