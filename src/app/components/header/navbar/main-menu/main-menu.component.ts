import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../../services/navbar.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {}

}
