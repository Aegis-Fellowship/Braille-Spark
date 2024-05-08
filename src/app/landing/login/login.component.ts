import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  // Switch to register panel
  @Output('changeLandingPage')
  changeLandingPage: EventEmitter<{ page: string }> = new EventEmitter();
  openRegisterPage() {
    this.changeLandingPage.emit({page: 'register'});
  }

  // Show Error Message
  showErrorMessage = false
  toggleErrorMessage() {
    this.showErrorMessage = !this.showErrorMessage
  }

  // Submit form
  formData = {
    "username": "",
    "password": ""
  }

  constructor(private http: HttpClient, private router: Router) {}
  endpoint = 'https://braille-spark-server.onrender.com/aegis-backend/login'
  onSubmit() {
    this.http.post(this.endpoint, this.formData)
      .subscribe((response) => {
        localStorage.setItem('id', response.toString());
        window.location.href = "dashboard"
      }, (error) => {
        this.toggleErrorMessage()
      });
  }
}
