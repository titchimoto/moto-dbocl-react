import React, { Component } from 'react'
import {Flex, Box} from 'rebass/styled-components';
import {TextInput} from '../ui/inputs';

class HotelItineraryFields extends Component {
  render() {
    return (
      <Flex width="100%" justifyContent='space-around'>
        <div className="padding-div">
        <Box width={1/1} px ={3}>
            <Flex flexDirection="column">
              <Box width={1/1}>
                <TextInput label="Hotel Name & Address" required />
              </Box>
            </Flex>
          </Box>
        </div>
        <div className="padding-div">
          <Box width={1/1} px={3}>
            <Flex flexDirection="column">
              <Flex>
                <Box width={1/2}>
                  <TextInput label="Check In Date" required />
                </Box>
                <Box width={1/2}>
                  <TextInput label="Check Out Time" required />
                </Box>
              </Flex>
            </Flex>
          </Box>
        </div>
      </Flex>
    )
  }
}

export default HotelItineraryFields;
