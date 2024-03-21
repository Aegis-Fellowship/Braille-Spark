import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {
  @Output('toggleRegisterPage')
  toggleRegisterPage: EventEmitter<any> = new EventEmitter();

  closeRegisterPage() {
    this.toggleRegisterPage.emit();
  }
}
