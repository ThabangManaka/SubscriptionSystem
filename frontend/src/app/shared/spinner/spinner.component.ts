import { SpinnerService } from './../../services/spinner.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  color ='primary';
  mode ='determinate';
value =50;
isLoading: Subject<boolean> = this.spinnerService.isLoading;
  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
  }

}
