import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  @Output('toggleRegisterPage')
  toggleRegisterPage: EventEmitter<any> = new EventEmitter();

  openRegisterPage() {
    this.toggleRegisterPage.emit();
  }
}
