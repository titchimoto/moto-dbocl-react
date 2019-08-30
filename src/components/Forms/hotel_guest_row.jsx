import React, { Component } from 'react';
import {Flex, Box} from 'rebass/styled-components';
import {Row} from '../ui/containers';
import {SelectInput, TextInput} from '../ui/inputs';
import {ProfileImage, PencilIcon, TrashIcon} from '../ui/icons';

class HotelGuestRow extends Component {
  render() {
    return (
      <Row>
        <Flex mx={-2} alignItems="center">
          <Box width={0.5/12} px={1}>
            <ProfileImage src="https://i.imgur.com/KNFkYkz.jpg" />
          </Box>
          <Box width={2.5/12} px={1}>
            <TextInput />
          </Box>
          <Box width={1/12} px={1}>
            <TextInput />
          </Box>
          <Box width={1/12} px={1}>
            <TextInput />
          </Box>
          <Box width={1/12} px={1}>
            <SelectInput>
              <option value="suite">Suite</option>
              <option value="queen">Queen</option>
            </SelectInput>
          </Box>
          <Box width={1.5/12} px={1}>
            <SelectInput>
              <option value="non-smoking">Non-smoking</option>
              <option value="smoking">Smoking</option>
            </SelectInput>
          </Box>
          <Box width={1.5/12} px={1}>
            <TextInput />
          </Box>
          <Box width={2/12} px={1}>
            <TextInput />
          </Box>
          <Box width={1/12} px={1}>
            <PencilIcon />
            <TrashIcon />
          </Box>
        </Flex>
      </Row>
    )
  }
}

export default HotelGuestRow;
