import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  valid = false;
  recaptcha: string;

  constructor() { }

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

  optNum1 = new FormControl('',[
      Validators.required
      ]);
  optNum2 = new FormControl('',[
    Validators.required
  ]);
  optNum3 = new FormControl('',[
    Validators.required
  ]);
  optNum4 = new FormControl('',[
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

}
