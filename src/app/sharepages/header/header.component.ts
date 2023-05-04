import {Component} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {User} from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userEmail: string | null = null;
  isAuthenticated = false;

  constructor(private authService: AuthService) {
    this.authService.user$.subscribe((user: User | null) => {
      this.userEmail = user?.email || null;
      this.isAuthenticated = !!this.userEmail;
    });
  }
}
