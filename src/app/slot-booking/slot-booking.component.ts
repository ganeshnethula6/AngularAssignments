import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SlotBookingService } from './slot-booking.service';
export interface Profile {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  profileDesc: string
}
export enum Mode {
  Submit,
  Update
}

@Component({
  selector: 'app-slot-booking',
  templateUrl: './slot-booking.component.html',
  styleUrls: ['./slot-booking.component.css']
})
export class SlotBookingComponent implements OnInit {
  @ViewChild('bookSlotForm')
  form!: NgForm;
  mode = Mode.Submit;
  btnName = this.mode == Mode.Submit ? "Submit" : "Update";
  service: SlotBookingService;
  formHeader = 'Book Slot';
  status = 'add';

  constructor(service: SlotBookingService) {
    this.service = service;

  }

  ngOnInit(): void {
    this.service.getSlots();
  }
  onSubmit(bookSlotForm: NgForm) {
    if (this.mode == Mode.Submit) {
      this.bookSlot(bookSlotForm);
    } else {
      this.service.updateSlot(this.service.profile.id, this.service.profile);
      bookSlotForm.reset();
    }

  }
  bookSlot(bookSlotForm: NgForm) {
    this.mode = Mode.Submit;
    this.btnName = "Submit";
    this.formHeader = "Book Slot";
    this.status = 'add';
    this.service.postSlots(bookSlotForm.value);
    bookSlotForm.reset();
  }
  updateProfile(id: number) {
    this.mode = Mode.Update;
    this.btnName = "Update";
    this.formHeader = "Update Slot";
    this.status = 'update';
    this.service.getSlot(id);
  }
  deleteProfile(id: number) {
    this.status = 'delete';
    if (confirm("Do you want to delete ?")) {
      this.service.deleteProfile(id);
    }

  }

}

