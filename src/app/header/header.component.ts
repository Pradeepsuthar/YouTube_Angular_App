import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'YouTube';
  logo = "assets/logo/logo.png"
  notification_count = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
