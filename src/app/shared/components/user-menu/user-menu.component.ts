import { Component, Input, signal } from '@angular/core';
import {
    ChevronDown,
    User,
    Settings,
    Shield,
    LogOut
} from 'lucide-angular';
import { ProfileDto } from '../../../features/application/model/application.model';
import { ProfileService } from '../../../features/profile/services/profile.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss'],
    standalone: false
})
export class UserMenuComponent {
    isOpen = false;


    readonly chevronDown = ChevronDown;
    readonly userIcon = User;
    readonly settingsIcon = Settings;
    readonly shieldIcon = Shield;
    readonly logoutIcon = LogOut;



  profile = signal<ProfileDto | null>(null);
  private userSubscription!: Subscription;

  constructor(private profileService: ProfileService){}


  ngOnInit(): void {
    this.subscribeToUser();
  }


  private subscribeToUser(){
    this.userSubscription = this.profileService.profileSubject$.subscribe(profile => {

      this.profile.set(profile);
    })
  }
    toggle(): void {

        this.isOpen = !this.isOpen;

    }

    closeDropdown() {
      this.isOpen = false;
    }

    logout(): void {



    }

    ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.userSubscription?.unsubscribe();
    }
}
