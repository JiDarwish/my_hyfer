import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const className = '';
    if (this.props.className) {
      this.className =
        this.props.className + this.props.disabled && ' disabled';
    } else {
      this.className = '' + this.props.disabled && ' disabled';
    }
    return (
      <button
        className={className}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    );
  }
}
