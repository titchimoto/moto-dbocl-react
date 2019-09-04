import React, { Component } from 'react';
import { TextInput } from '../ui/inputs';
import { LabelButton } from '../ui/buttons';

class CallOffset extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handleAddTime = ({target: { value }}) => {
    this.setState(({callOffset}) => ({callOffset: callOffset ? callOffset + Number(value) : Number(value)}))
  }

  render() {
    const { callOffset } = this.state
    return (
      <div>
        <TextInput width="120px" value={callOffset} label="Call Offset (mins)" />
        <LabelButton onClick={this.handleAddTime} value={15}>+ 15</LabelButton>
        <LabelButton onClick={this.handleAddTime} value={30}>+ 30</LabelButton>
        <LabelButton onClick={this.handleAddTime} value={45}>+ 45</LabelButton>
        <LabelButton onClick={this.handleAddTime} value={60}>+ 60</LabelButton>
      </div>
    )
  }
}

export default CallOffset;
