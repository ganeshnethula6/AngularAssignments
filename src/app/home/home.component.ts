import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Welcome to the Page";
  techSkills: any[] = ["skill 1", "skill 2", "skill 3", "skill 4"];
  mangSkills: any[] = ["skill 1", "skill 2"];
  constructor() { }

  ngOnInit(): void {
  }

}
