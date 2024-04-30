import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-request-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './request-admin.component.html',
  styleUrl: './request-admin.component.sass'
})
export class RequestAdminComponent {
    // Submit form
    formData = {
      "requestCode": "",
    }

    // User ID
    id = localStorage.getItem('id');

  constructor(private http: HttpClient, private router: Router) {}
  endpoint = 'http://localhost:8080/aegis-backend/' + this.id + '/requestadmin'
  onSubmit() {
    console.log(this.endpoint);
    this.http.put(this.endpoint, this.formData)
      .subscribe((response) => {
        alert("Privilege Granted")
      }, (error) => {
        console.log(error.Message)
        alert("Privilege Granted")
      });
  }
}
