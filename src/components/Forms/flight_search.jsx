import React, { Component } from 'react';
import {Divider} from '../ui/containers';
import {Flex, Box} from 'rebass/styled-components';
import {TextInput} from '../ui/inputs';
import {PrimaryButton} from '../ui/buttons';

class FlightSearch extends Component {
  render() {
    return (
      <Box my={4} mx={2}>
        <Divider />
        <Box py={3}>
          <Box py={3}>
            <h4>Flight Information</h4>
            <p className="grey">Search to autofill flight, or manually enter flight details below.</p>
          </Box>
          <Flex alignItems="center">
            <Box width={4/12}>
              <TextInput />
            </Box>
            <Box width={4/12}>
              <TextInput />
            </Box>
            <Box width={2/12}>
              <TextInput />
            </Box>
            <Box width={2/12}>
              <PrimaryButton>Add Flight</PrimaryButton>
            </Box>
          </Flex>
        </Box>
      </Box>
    )
  }
}

export default FlightSearch;
