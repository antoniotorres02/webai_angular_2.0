// profile.component.ts
import {Component, OnInit} from '@angular/core';
import {ProfileService} from 'src/app/services/profile-service.service';
import {AuthService} from 'src/app/services/auth.service';
import {UserProfile} from '../../interfaces/profile';
import {User} from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile | null = null;
  user: User | null = null;
  editingBio: boolean = false;
  newBio: string = '';


  constructor(
    private profileService: ProfileService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.profileService.getUserProfile().subscribe((profile) => {
      this.userProfile = profile;
    });

    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  editBio(): void {
    this.editingBio = true;
    this.newBio = this.userProfile?.bio || '';
  }

  async saveBio(): Promise<void> {
    if (this.user && this.newBio !== this.userProfile?.bio) {
      await this.profileService.updateBio(this.user.uid, this.newBio);
      this.userProfile = {...this.userProfile!, bio: this.newBio};
    }
    this.editingBio = false;
  }

  cancelEditing(): void {
    this.editingBio = false;
  }
}
