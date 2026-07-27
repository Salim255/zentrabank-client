import { Component } from '@angular/core';
import {
    ChevronDown,
    User,
    Settings,
    Shield,
    LogOut
} from 'lucide-angular';


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



    user = {

        firstName: 'Pauline',
        lastName: 'Bernard'

    };



    toggle(): void {

        this.isOpen = !this.isOpen;

    }



    logout(): void {

        console.log('logout');

    }


}
