import { Component } from '@angular/core';


interface FooterLink {

    label: string;

    url: string;

}


interface FooterColumn {

    title: string;

    links: FooterLink[];

}



@Component({

    selector: 'landing-footer',

    templateUrl: './footer.component.html',

    styleUrls: ['./footer.component.scss'],

    standalone: false

})
export class FooterComponent {


    readonly columns: FooterColumn[] = [


        {

            title: 'Product',

            links: [

                {
                    label: 'Features',
                    url: '#'
                },

                {
                    label: 'Security',
                    url: '#'
                },

                {
                    label: 'Demo',
                    url: '#'
                }

            ]

        },


        {

            title: 'Company',

            links: [

                {
                    label: 'About',
                    url: '#'
                },

                {
                    label: 'Careers',
                    url: '#'
                },

                {
                    label: 'Contact',
                    url: '#'
                }

            ]

        },


        {

            title: 'Legal',

            links: [

                {
                    label: 'Privacy',
                    url: '#'
                },

                {
                    label: 'Terms',
                    url: '#'
                }

            ]

        }


    ];



    readonly year = new Date().getFullYear();


}
