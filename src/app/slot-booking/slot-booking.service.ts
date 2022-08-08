import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './slot-booking.component';

@Injectable({
  providedIn: 'root'
})
export class SlotBookingService {

  http: HttpClient;
  profiles: Profile[] = [];
  URL2: string = 'https://retoolapi.dev/ajU7MQ/profiles';
  URL1: string = 'https://retoolapi.dev/7or2Yr/profiles';
  profile: Profile = {
    "id": 1,
    "email": "",
    "phone": "",
    "lastName": "",
    "firstName": "",
    "profileDesc": ""
  };
  statusMsg = ``;

  constructor(http: HttpClient) {
    this.http = http;

  }
  postSlots(profile: Profile) {
    this.http.post(this.URL2, profile).subscribe(
      response => {
        var profile: any = response;
        this.profiles.push(profile);
        this.statusMsg = `${profile.firstName}'s slot is booked with the id ' ${profile.id}'`;
      }
    )
  }
  getSlots(): any {
    this.http.get(this.URL2).subscribe(resonse => {
      this.profiles = [];
      var profile: any = resonse;
      this.profiles = profile;

    })
  }
  deleteProfile(id: number) {
    this.http.delete(this.URL2 + '/' + id).subscribe(response => {
      this.getSlots();
      var profile: any = response;
      this.statusMsg = `slot is deleted with the id ' ${id} '`;
    })
  }
  getSlot(id: number) {
    this.http.get(this.URL2 + '/' + id).subscribe(response => {
      var pro: any = response;
      this.profile = pro;
    })
  }
  updateSlot(id: number, profile: Profile) {
    console.log(id, JSON.stringify(profile));
    this.http.put(this.URL2 + '/' + id, profile).subscribe(response => {
      this.getSlots();
      var profile: any = response;
      this.statusMsg = ` ${profile.firstName} 's slot is updated with the id ' ${profile.id} '`;
    });
  }
}


