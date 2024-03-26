import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.sass'
})
export class ChangePasswordComponent {
    // Submit form
    formData = {
      "password": "",
      "confirmation": ""
    }

    constructor(private http: HttpClient, private router: Router) {}
    endpoint = 'http://localhost:8080/aegis-backend/---'
    onSubmit() {
      this.http.post(this.endpoint, this.formData)
        .subscribe((response) => {
          window.location.href = "dashboard"
          alert("Password Changed")
        }, (error) => {
          console.log(error.Message)
          alert("Failed to change password")
        });
    }
}
