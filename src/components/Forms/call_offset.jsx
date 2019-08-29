import React, { Component } from 'react';
import {TextInput} from '../ui/inputs';
import {LabelButton} from '../ui/buttons';
class CallOffset extends Component {
  render() {
    return (
      <div>
        <TextInput width="120px" label="Call Offset (mins)" />
        <LabelButton>+ 15</LabelButton>
        <LabelButton>+ 30</LabelButton>
        <LabelButton>+ 45</LabelButton>
        <LabelButton>+ 60</LabelButton>
      </div>
    )
  }
}

export default CallOffset;
