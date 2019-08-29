import React, { Component } from 'react';
import {SelectInput, TextInput, FieldLabel} from '../ui/inputs';
import {Row} from '../ui/containers';
import {PrimaryButton} from '../ui/buttons';
import {ProfileImage} from '../ui/icons';
import {Flex, Box} from 'rebass/styled-components';

class PreviousConnectionRow extends Component {
  render() {
    return (
      <Row>
        <Flex mx={-2} alignItems="center">
          <Box width={1/12} px={2}>
            <ProfileImage src="https://i.imgur.com/KNFkYkz.jpg" />
          </Box>
          <Box width={3/12} px={2}>
            <SelectInput>
              <option value="mickey">Mickey Mouse</option>
            </SelectInput>
          </Box>
          <Box width={2/12} px={2}>
            <SelectInput>
              <option value="stylist">Stylist</option>
            </SelectInput>
          </Box>
          <Box width={2/12} px={2}>
            <TextInput />
          </Box>
          <Box width={2/12} px={2}>
            <TextInput />
          </Box>
          <Box width={2/12} px={2}>
            <PrimaryButton invert>+ ADD CONTACT</PrimaryButton>
          </Box>
        </Flex>
      </Row>
    )
  }
}

export default PreviousConnectionRow;
