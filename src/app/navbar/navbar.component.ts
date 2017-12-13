import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Filter, Ideology, Method} from '../models/filter.model';
import {Authentication} from '../authentication/authentication';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  /**
   *
   *
   * @type {EventEmitter<{Filter}>}
   */
  @Output() filterEvent = new EventEmitter<Filter>();

  /**
   * Defines the set of filters
   *
   * @type {Filter}
   */
  filters = new Filter(Ideology.Neutral, Method.Popular);

  /**
   * The width of the window, updated by onResize
   *
   * @type {number}
   */
  windowWidth: number = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  /**
   * Defines the minimum width needed to display the tabs
   *
   * @type {number}
   */
  minTabsWidth: number = 768;

  /**
   * // TODO filterLeft Documentation
   */
  filterLeft() {
    this.filters.ideology = Ideology.Left;

    this.filterEvent.emit(this.filters);
  }

  /**
   * // TODO filterNeutral Documentation
   */
  filterNeutral() {
    this.filters.ideology = Ideology.Neutral;

    this.filterEvent.emit(this.filters);
  }

  /**
   * // TODO filterRight Documentation
   */
  filterRight() {
    this.filters.ideology = Ideology.Right;

    this.filterEvent.emit(this.filters);
  }

  /**
   * // TODO onResize Documentation
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
  }

  /**
   * // TODO onLogin Documentation
   */
  onLogin() {
    // TODO onLogin Implementation
  }

  ngOnInit() {}

}
