import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  filters = {
    left: false,
    neutral: true,
    right: false,
  };

  constructor() { }

  ngOnInit() {
  }

  filterLeft() {
    this.filters.left = true;
    this.filters.neutral = false;
    this.filters.right = false;
  }

}
