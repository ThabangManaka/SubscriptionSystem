import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { routes } from 'src/app/consts/routes';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  public flatlogicEmail: string = "https://flatlogic.com";
constructor() {

}
  public signOutEmit(): void {
    this.signOut.emit();
  }
}
