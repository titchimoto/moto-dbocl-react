import React, { Component } from 'react';
import {TextInput, DateInput} from '../ui/inputs';
import {Flex} from 'rebass/styled-components';

class DateTime extends Component {
  render() {
    return (
      <Flex justifyContent="space-evenly">
        <DateInput label="Date" required />
        <TextInput label="Start Time" required />
        <TextInput label="End Time" required />
      </Flex>
    )
  }
}

export default DateTime;
