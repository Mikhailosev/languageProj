import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div id="navigation" className="navigation">
        <input
          type="checkbox"
          id="navi-toggle"
          className="navigation__checkbox"
        />
        <label for="navi-toggle" className="navigation__button">
          <a className="navigation__icon">&nbsp;</a>
        </label>

        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a className="navigation__link">Login</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link">Register</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
