import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from '../models/subscription';

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
