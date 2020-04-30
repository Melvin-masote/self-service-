import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { OtpComponent } from './components/otp/otp.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'otp', component: OtpComponent }

];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class MainRoutingModule {}
