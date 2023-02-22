import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllSubscription(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + '/subscription/get');
}

  addSubscription(subscription : Subscription) {
    return this.http.post(this.baseUrl + '/subscription/add', subscription);
  }
}
