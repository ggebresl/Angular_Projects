import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { DayOneComponent } from './day-one/day-one.component';
import { DayTwoComponent } from './day-two/day-two.component';
import { DayThreeComponent } from './day-three/day-three.component';
import { DayFourComponent } from './day-four/day-four.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptorComponent } from './custom-http-interceptor/custom-http-interceptor.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DayFiveComponent } from './day-five/day-five.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {Data} from './data';
import { DaySixComponent } from './day-six/day-six.component';
import { DaySevenComponent } from './day-seven/day-seven.component';
import { SquarePipe } from './square.pipe';
import { DayEightComponent } from './day-eight/day-eight.component';
import { DayNineComponent } from './day-nine/day-nine.component';
import { DayTenComponent } from './day-ten/day-ten.component';
import { DayElevenComponent } from './day-eleven/day-eleven.component'
import { EventHandlerService } from './event-handler.service';
import { ColorDirective } from './color.directive';
@NgModule({
  declarations: [
    AppComponent,
    DayOneComponent,
    DayTwoComponent,
    DayThreeComponent,
    DayFourComponent,
    DayFiveComponent,
    DaySixComponent,
    DaySevenComponent,
    SquarePipe,
    DayEightComponent,
    DayNineComponent,
    DayTenComponent,
    DayElevenComponent,
    ColorDirective
  ],
  imports: [
  BrowserModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  HttpClientModule,
  NgxSpinnerModule,
  AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptorComponent,
    multi: true,
  }, EventHandlerService,Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
