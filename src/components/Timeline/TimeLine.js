import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ComponentTimeLine from 'react-visjs-timeline';
import ModuleInfo from './ModuleInfo';

const options = {
  width: '100%',
  stack: false,
  showCurrentTime: true,
  zoomMin: 1000000,
  editable: true
};

@inject('timeLineStore')
@observer
export default class TimeLine extends Component {
  componentDidMount() {
    this.props.timeLineStore.getItems();
  }

  render() {
    const { items, groups } = this.props.timeLineStore;
    if (items.length !== 0) {
      return (
        <div>
          <ComponentTimeLine
            items={[...items]}
            options={options}
            groups={[...groups]}
          />
          <ModuleInfo />
        </div>
      );
    } else {
      return <h1>Hey</h1>;
    }
  }
}
