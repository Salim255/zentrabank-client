import { Component } from '@angular/core';

import {
    ShieldCheck,
    LockKeyhole,
    Fingerprint
} from 'lucide-angular';



interface SecurityItem {

    icon: any;

    title: string;

    description: string;

}



@Component({

    selector: 'landing-security',

    templateUrl: './security.component.html',

    styleUrls: ['./security.component.scss'],

    standalone: false

})
export class SecurityComponent {



    readonly securityHeroIcon = ShieldCheck;


    readonly securityItems: SecurityItem[] = [

        {
            icon: ShieldCheck,
            title: 'Built with security first',
            description:
                'Every layer of ZentraBank is designed with protection, privacy, and reliability in mind.'
        },

        {
            icon: LockKeyhole,
            title: 'Protected transactions',
            description:
                'Modern encryption and secure processes help keep your financial activity protected.'
        },

        {
            icon: Fingerprint,
            title: 'Private by design',
            description:
                'Your data remains under your control with transparent and responsible handling.'
        }

    ];

}
