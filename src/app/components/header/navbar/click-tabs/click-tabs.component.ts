import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../../../services/navbar.service';

@Component({
  selector: 'app-click-tabs',
  templateUrl: './click-tabs.component.html',
  styleUrls: ['./click-tabs.component.css']
})
export class ClickTabsComponent implements OnInit {
  filter: string = 'neutral';

  constructor(private router: Router, private navbarService: NavbarService) { }

  ngOnInit() {
  }

  onFilter(ideologyStr: string) {
    this.filter = ideologyStr;
    this.router.navigate([], {queryParams: {filter: this.filter}});
  }

}
