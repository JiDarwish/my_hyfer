import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ReactHtmlParser from 'react-html-parser';

@inject('moduleInfoStore')
@observer
export default class ModuleInfo extends Component {
  componentDidMount = () => {
    this.props.moduleInfoStore.getInfo();
  };

  render() {
    const info = this.props.moduleInfoStore.info;
    if (info) {
      return <div>{ReactHtmlParser(info)}</div>;
    }
    return (
      <div>
        <h1>HEY</h1>
      </div>
    );
  }
}
