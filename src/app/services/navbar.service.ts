import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

  /**
   * The width of the window, updated by onResize
   *
   * @type {number}
   */
  private _windowWidth: number = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  /**
   * Defines the minimum width needed to display the tabs
   *
   * @type {number}
   */
  private _minTabsWidth: number = 768;

  constructor() { }

  /**
   * Checks if the tabs should be showing.
   *
   * @returns {boolean}
   */
  areTabsShowing() {
    return this._windowWidth >= this._minTabsWidth;
  }

  updateWindowWidth() {
    this._windowWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
  }

  get windowWidth(): number {
    return this._windowWidth;
  }

  get minTabsWidth(): number {
    return this._minTabsWidth;
  }
}
