import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainModule} from './main/main.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material';
import { MaterialComponentsModule} from './material-components.module';
import { SortablejsModule, SortablejsOptions } from 'angular-sortablejs';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';

// const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
//     suppressScrollX: true,
//     swipePropagation: false
// };

const sortablejsConfig: SortablejsOptions = {
  animation: 300
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    SortablejsModule,
    MainModule,
    PerfectScrollbarModule
  ],
  providers: [
    MatIconRegistry
  ],
  bootstrap: [
    AppComponent
  ]
})
@NgModule({
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})

export class AppModule {}
