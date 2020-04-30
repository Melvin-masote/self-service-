import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'benefit-page',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit{

    valid = false;
    recaptcha: any[];


    ngOnInit() {
    }

    
    resolved(response: any[]) {
        this.recaptcha = response;
        if(this.recaptcha != null){
            this.valid = true;
        }else{
            this.valid = false;
        }
    }
}
