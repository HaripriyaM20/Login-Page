import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router) { }

  onSubmit() {
    // Navigate to the table route after form submission
    this.router.navigate(['/table'], {
      queryParams: {
        username: this.username,
        email: this.email
      }
    });
  }
}
