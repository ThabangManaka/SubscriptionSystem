import { SubscriptionService } from './../../../../services/subscription.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
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
