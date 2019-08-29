import React, { Component } from 'react';
import {SelectInput, TextInput} from '../ui/inputs';
import {Row} from '../ui/containers';
import {PrimaryButton} from '../ui/buttons';
import {Flex, Box} from 'rebass/styled-components';

class NewConnectionRow extends Component {
  render() {
    return (
      <Row>
        <Flex mx={-2} alignItems="center">
          <Box width={2/12} px={2}>
            <SelectInput>
              <option value="mickey">Mickey Mouse</option>
            </SelectInput>
          </Box>
          <Box width={2/12} px={2}>
            <SelectInput>
              <option value="stylist">Stylist</option>
            </SelectInput>
          </Box>
          <Box width={3/12} px={2}>
            <TextInput />
          </Box>
          <Box width={3/12} px={2}>
            <TextInput />
          </Box>
          <Box width={2/12} px={2}>
            <PrimaryButton>+ SAVE</PrimaryButton>
          </Box>
        </Flex>
      </Row>
    )
  }
}

export default NewConnectionRow;
