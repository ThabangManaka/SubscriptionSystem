import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from '../consts/routes';
import { AlertifyService } from '../services/alertify.service';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-new-subscription',
  templateUrl: './new-subscription.component.html',
  styleUrls: ['./new-subscription.component.scss']
})
export class NewSubscriptionComponent implements OnInit {
  myForm: FormGroup;
  public routers: typeof routes = routes;
  message: string = "Add New Software Product";

  constructor(private subscriptionService: SubscriptionService, private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])


    });
  }
  onSubmit(form: any) {
   this.subscriptionService.addSubscription(form.value).subscribe(result => {
        if(result != null ){

          this.alertify.success('Software Product is addede');
          this.router.navigate([this.routers.HOME]);
        }
   },
     error => {
      this.alertify.error('Something went wrong, Try again');
     })
  }

  onDecline(){
    this.myForm.reset();
  }


}
