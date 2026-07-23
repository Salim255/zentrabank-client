import { Component } from '@angular/core';

import {
    Layers,
    BrainCircuit,
    ShieldCheck
} from 'lucide-angular';


interface Feature {

    icon: any;

    title: string;

    description: string;

}



@Component({

    selector: 'landing-features',

    templateUrl: './features.component.html',

    styleUrls: ['./features.component.scss'],

    standalone: false

})
export class FeaturesComponent {


    readonly features: Feature[] = [

        {

            icon: Layers,

            title: 'Everything in one place',

            description:
                'Manage accounts, payments, and financial activity through one clear and unified experience.'

        },


        {

            icon: BrainCircuit,

            title: 'Smarter financial insights',

            description:
                'Understand your spending patterns and make better decisions with intelligent analysis.'

        },


        {

            icon: ShieldCheck,

            title: 'Security you can trust',

            description:
                'Built with modern security standards to protect your financial data and transactions.'

        }

    ];


}
