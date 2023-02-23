import { Component, OnInit } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {

  constructor() {
    render({
      id: "#myPaypalButtons",
      currency: "USD",
      value: "100.00",

      onApprove: (details) => {
       alert("Transaction Succesfull");
      }
    });
    }
  }



