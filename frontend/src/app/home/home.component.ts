import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name','description','price','actions'];
  listSubscription: any;
  dataSource: any;
  constructor(private subscriptionService : SubscriptionService) { }

  ngOnInit(): void {
    this.subscriptionService.getAllSubscription().subscribe(allSubscription=>{
      console.log(allSubscription);
      this.listSubscription = allSubscription;
      this.dataSource = new MatTableDataSource<any>(allSubscription),
     this.dataSource.sort = this.sort,

  this.dataSource.paginator = this.paginator;
    })
  }
}
