import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { ApplicationFormService } from "../../services/application-form.service";
import { ApplicationService } from "../../services/application.service";
import { SelectOption } from "../../../../shared/kits/app-select/app-select.component";




@Component({
    selector: "app-application-form",
    templateUrl: "./application-form.component.html",
    styleUrls: ["./application-form.component.scss"],
    standalone: false
})
export class ApplicationFormComponent implements OnInit {


    applicationForm!: FormGroup;



    /*
    ==========================================================
       SELECT OPTIONS
    ==========================================================
    */


    titles: SelectOption[] = [

        {
            label: "Mr",
            value: "MR"
        },

        {
            label: "Mrs",
            value: "MRS"
        },

        {
            label: "Ms",
            value: "MS"
        }

    ];





    countries: SelectOption[] = [

        {
            label: "France",
            value: "france"
        }

    ];





    phoneTypes: SelectOption[] = [

        {
            label: "Mobile",
            value: "mobile"
        },

        {
            label: "Home",
            value: "home"
        },

        {
            label: "Work",
            value: "work"
        }

    ];





    employmentStatuses: SelectOption[] = [

        {
            label: "Employed",
            value: "employed"
        },

        {
            label: "Self-employed",
            value: "self-employed"
        },

        {
            label: "Unemployed",
            value: "unemployed"
        },

        {
            label: "Student",
            value: "student"
        },

        {
            label: "Retired",
            value: "retired"
        },

        {
            label: "Other",
            value: "other"
        }

    ];






    accountTypes: SelectOption[] = [

        {
            label: "Checking Account",
            value: "CHECKING"
        },

        {
            label: "Savings Account",
            value: "SAVINGS"
        },

        {
            label: "Credit Account",
            value: "CREDIT"
        },

        {
            label: "Loan Account",
            value: "LOAN"
        }

    ];








    /*
    ==========================================================
       SOURCE OF WEALTH
    ==========================================================
    */


    wealthOptions = [

        {
            label: "Income from Employment",
            control: "employmentIncome"
        },

        {
            label: "Market Investments / Trading",
            control: "marketInvestments"
        },

        {
            label: "Interest / Dividend Income",
            control: "interestDividend"
        },

        {
            label: "Property / Real Estate",
            control: "realEstate"
        },

        {
            label: "Inheritance / Gift",
            control: "inheritanceGift"
        },

        {
            label: "Pension / Retirement Benefit",
            control: "pension"
        },

        {
            label: "Disability / Severance / Unemployment",
            control: "disabilityUnemployment"
        },

        {
            label: "Other",
            control: "other"
        }

    ];








    constructor(

        private applicationService: ApplicationService,

        private applicationFormService: ApplicationFormService,

        private router: Router

    ) {}







    ngOnInit(): void {


        this.applicationForm =
            this.applicationFormService.buildForm();


    }







    onContinue(): void {


        if(this.applicationForm.invalid){


            this.applicationForm.markAllAsTouched();


            return;

        }






        this.applicationService
            .setApplicationInstance(
                this.applicationForm.value
            );






        this.router.navigate(
            ["/application/review"]
        );


    }


}
