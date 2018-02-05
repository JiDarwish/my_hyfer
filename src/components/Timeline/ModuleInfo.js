import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ReactHtmlParser from 'react-html-parser';

@inject('moduleInfoStore')
@observer
export default class ModuleInfo extends Component {
  sendRequestReadme = () => {
    this.props.moduleInfoStore.getInfo();
  };

  render() {
    const { repoName, readme } = this.props.moduleInfoStore;
    let content = '';
    if (!repoName) {
      content = <h1>select an item to view it's github readme</h1>;
    } else if (repoName === 'NOREPO') {
      content = <h1>This module has no github repositroy</h1>;
    } else {
      this.sendRequestReadme();
      content = <div>{ReactHtmlParser(readme)}</div>;
    }

    return <div>{content}</div>;
  }
}
