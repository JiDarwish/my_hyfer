import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src="/TODO:" alt="HackYourFuture logo" />
        <nav>
          <ul>
            <li>
              <NavLink to="/timeline">Timeline</NavLink>
            </li>
            <li>
              <NavLink to="/modules">Modlues</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
