import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { SipCalculatorComponent } from './sip-calculator/sip-calculator.component';
import { SlotBookingComponent } from './slot-booking/slot-booking.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "todo", component: TodoComponent },
  { path: "sip-calculator", component: SipCalculatorComponent },
  { path: "http", component: HttpComponent },
  { path: "slot-booking", component: SlotBookingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
