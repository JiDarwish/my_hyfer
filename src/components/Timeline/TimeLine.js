import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ComponentTimeLine from 'react-visjs-timeline';
import Modal from 'react-responsive-modal';

import ModuleInfo from './ModuleInfo';
import Button from '../Helpers/Button/Button';
import AddClassForm from '../AddClassForm/AddClassForm';

const options = {
  width: '100%',
  stack: false,
  showCurrentTime: true,
  zoomMin: 1000000,
  dataAttributes: 'all'
  // editable: true
};

@inject('timelineStore', 'moduleInfoStore')
@observer
export default class TimeLine extends Component {
  componentDidMount() {
    this.props.timelineStore.getItems();
  }

  render() {
    const { items, groups } = this.props.timelineStore;
    if (items.length !== 0) {
      return (
        <div>
          <Button
            onClick={this.props.timelineStore.handleToggleModal}
            className="modalToggeler button"
          >
            Add a class
          </Button>
          <Modal
            open={this.props.timelineStore.isModalOpen}
            onClose={this.props.timelineStore.handleToggleModal}
          >
            <AddClassForm />
          </Modal>
          <ComponentTimeLine
            clickHandler={this.props.moduleInfoStore.handleGetReadme}
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
