import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourComponent } from '../day-four/day-four.component';
import { DayFiveComponent } from '../day-five/day-five.component';
import { DaySixComponent } from '../day-six/day-six.component';
import { DaySevenComponent } from '../day-seven/day-seven.component';

const routes: Routes = [
  { path: 'dayFour', component: DayFourComponent},
  { path:'day-five/:username', component:DayFiveComponent},
  {path:'daySix/:welcomeMessage',component:DaySixComponent},
  {path:'daySix/:welcomeMessage/:userId',component:DaySixComponent},
  { path: 'daySeven', component: DaySevenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
