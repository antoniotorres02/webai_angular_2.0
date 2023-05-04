import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userEmail: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.user$.subscribe((user: User | null) => {
      this.userEmail = user?.email || null;
    });
  }

  logout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/']);
    });
  }
}
