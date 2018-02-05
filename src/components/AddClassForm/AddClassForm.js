import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Button from '../Helpers/Button/Button';
import InputField from '../Helpers/InputField/InputField';

@inject('timelineStore')
@observer
export default class AddClassForm extends Component {
  state = {
    toBeAddedClass: '',
    toBeAddedDate: ''
  };

  handleChangeClassName = newClass => {
    this.setState({ toBeAddedClass: newClass });
  };

  handleChangeStartDate = newDate => {
    this.setState({
      toBeAddedDate: newDate
    });
  };

  handleAddClass = () => {
    const { toBeAddedClass, toBeAddedDate } = this.state;
    this.props.timelineStore.handleAddClass(toBeAddedClass, toBeAddedDate);
  };
  render() {
    return (
      <div>
        <InputField
          type="text"
          placeHolder="Class name"
          className="newClassInput"
          value={this.state.toBeAddedClass}
          onChange={this.handleChangeClassName}
        />
        <InputField
          type="date"
          className="newClassStartDate"
          placeHolder="Start date"
          value={this.state.toBeAddedDate}
          onChange={this.handleChangeStartDate}
        />
        <Button onClick={this.handleAddClass} className="addClassButton button">
          Add
        </Button>
      </div>
    );
  }
}
