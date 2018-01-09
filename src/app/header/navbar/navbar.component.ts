import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

import { Filter } from '../../models/filter.model';
import {Authentication} from '../../authentication/authentication';
import {NavbarService} from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NavbarService],
})
export class NavbarComponent implements OnInit {

  /**
   *
   *
   * @type {EventEmitter<{Filter}>}
   */
  @Output() filterEvent = new EventEmitter<Filter>();

  /**
   * An event signalling that the page needs to be changed. Contains
   * the name of the page to change to.
   *
   * @type {EventEmitter<string>}
   */
  @Output() pageEvent = new EventEmitter<string>();

  /**
   * Defines the set of filters
   *
   * @type {Filter}
   */
  filter = new Filter();

  constructor(private navbarService: NavbarService) { }

  /**
   * Updates the value of this.windowWidth whenever a window resize event occurs.
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.navbarService.updateWindowWidth();
  }

  /**
   * Updates the user page based on whether their is a user signed in or not.
   * Signed In = userPage, Not Signed In = signInPage
   */
  onSignIn() {
    const userSession = Authentication.getUserSession();

    if (userSession) {
      this.pageEvent.emit('user');
      this.filter = new Filter();
      alert(this.filter);
    } else {
      this.pageEvent.emit('signIn');
      this.filter = new Filter();
      alert(this.filter.ideology);
    }
  }

  ngOnInit() {}

}
