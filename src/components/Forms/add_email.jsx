import React, { Component } from 'react';
import {Flex, Box} from 'rebass/styled-components';
import {SelectInput, TextInput, CheckboxInput} from '../ui/inputs';
import {TrashIcon} from '../ui/icons';

class EmailRow extends Component {
  render() {
    return (
      <Flex mx={-2} alignItems="center">
        <Box width={5/12} px={2}>
          <TextInput />
        </Box>
        <Box width={4/12} px={2}>
          <SelectInput>
            <option value="work">Work</option>
            <option value="home">Home</option>
          </SelectInput>
        </Box>
        <Box width={1/12} px={2}>
          <CheckboxInput />
        </Box>
        <Box width={2/12} px={2}>
          <TrashIcon />
        </Box>
      </Flex>
    )
  }
}

export default EmailRow;
