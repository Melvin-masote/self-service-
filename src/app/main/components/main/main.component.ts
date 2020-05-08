import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'benefit-page',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

// tslint:disable-next-line:one-line
export class MainComponent implements OnInit{

    valid = false;
    recaptcha: string;


    ngOnInit() {
    }


    resolved(response: string) {
        this.recaptcha = response;
        if (this.recaptcha != null){
            this.valid = true;
        }
        else{
            this.valid = false;
        }
    }
    // tslint:disable-next-line:member-ordering
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,

    ]);

    // tslint:disable-next-line:member-ordering
    phoneNumber = new FormControl('', [
        Validators.required,
        Validators.pattern( '^(\\+27|0)[6-8][0-9]{8}$' )
    ]);

    // tslint:disable-next-line:member-ordering
    idNumber = new FormControl('', [
        Validators.required,
        Validators.pattern('(?<Year>[0-9][0-9])(?<Month>([0][1-9])|([1][0-2]))(?<Day>([0-2][0-9])|([3][0-1]))(?<Gender>[0-9])(?<Series>[0-9]{3})(?<Citizenship>[0-9])(?<Uniform>[0-9])(?<Control>[0-9])')
    ]);

    // tslint:disable-next-line:member-ordering
    matcher = new MyErrorStateMatcher();
}
