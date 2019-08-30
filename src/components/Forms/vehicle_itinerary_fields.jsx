import React, { Component } from 'react'
import {Flex, Box} from 'rebass/styled-components';
import {TextInput} from '../ui/inputs';

class VehicleItineraryFields extends Component {
  render() {
    return (
      <Flex width="100%" justifyContent='space-around'>
        <div className="padding-div">
        <Box width={1/1} px ={3}>
            <Flex flexDirection="column">
              <Box width={1/1}>
                <TextInput label="Vehicle Organization" required />
              </Box>
              <Box width={1/1}>
                <TextInput label="Vehicle Type" />
              </Box>
            </Flex>
          </Box>
        </div>
        <div className="padding-div">
          <Box width={1/1} px={3}>
            <Flex flexDirection="column">
              <Box width={1/1}>
                <TextInput label="Name on Sign" required />
              </Box>
              <Box width={1/1}>
                <TextInput label="Additional Information" />
              </Box>
            </Flex>
          </Box>
        </div>
      </Flex>
    )
  }
}

export default VehicleItineraryFields;
