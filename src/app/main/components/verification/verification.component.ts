import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-verify-user',
    templateUrl: './verification.component.html',
    styleUrls: ['./verification.component.scss']
})

export class VerificationComponent {
    verificationForm = new FormGroup({
        dateOfIssue: new FormControl(''),
        session_OTP: new FormControl(''),
        memberFirstName: new FormControl(''),
        memberInitials: new FormControl(''),
        memberLastName: new FormControl('')
    });




}
