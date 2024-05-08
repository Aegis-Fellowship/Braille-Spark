import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {
  // Switch to login panel
  @Output('changeLandingPage')
  changeLandingPage: EventEmitter<{ page: string }> = new EventEmitter();
  closeRegisterPage() {
    this.changeLandingPage.emit({page: 'login'});
  }

  // Submit form
  formData = {
    "username": "",
    "firstName": "",
    "lastName": "",
    "password": ""
  }

  constructor(private http: HttpClient, private router: Router) {}
  endpoint = 'https://braille-spark-server.onrender.com/aegis-backend/registration'
  onSubmit() {
    this.http.post(this.endpoint, this.formData)
      .subscribe((response) => {
        this.changeLandingPage.emit({page: 'login'});
      }, (error) => {
        alert('Failed to create account.')
        console.log("Error: " + error.message)
      });
  }
}
