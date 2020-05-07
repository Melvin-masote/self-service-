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
    matcher = new MyErrorStateMatcher();
}
