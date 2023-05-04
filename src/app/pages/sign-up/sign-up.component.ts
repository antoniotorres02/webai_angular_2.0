import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password, confirmPassword } = form.value;

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      this.authService.register({ email, password })
        .then(() => this.router.navigate(['/']))
        .catch((error: { message: any; }) => alert(error.message));
    }
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(() => this.router.navigate(['/']))
      .catch((error: { message: any; }) => alert(error.message));
  }
}
