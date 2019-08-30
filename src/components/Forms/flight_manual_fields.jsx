import React from 'react';
import {Flex, Box} from 'rebass/styled-components';
import {TextInput} from '../ui/inputs';

const FlightManualFields = () => (
  <Flex width="100%" justifyContent='space-around'>
    <div className="padding-div">
      <Box width={1/1} px ={3}>
        <Flex flexDirection="column">
          <Flex>
            <Box width={1/2}>
              <TextInput label="Airline" required />
            </Box>
            <Box width={1/2}>
              <TextInput label="Flight Number" />
            </Box>
          </Flex>
          <Flex>
            <Box width={1/2}>
              <TextInput label="Departure Date" required />
            </Box>
            <Box width={1/2}>
              <TextInput label="Departure Time" />
            </Box>
          </Flex>
          <Box width={1/1}>
            <TextInput label="Departure Airport" />
          </Box>
        </Flex>
      </Box>
    </div>
    <div className="padding-div">
      <Box width={1/1} px={3}>
        <Flex flexDirection="column">
          <Flex>
            <Box width={1/2}>
              <TextInput label="Arrival Date" required />
            </Box>
            <Box width={1/2}>
              <TextInput label="Arrival Time" />
            </Box>
          </Flex>
          <Box width={1/1}>
            <TextInput label="Arrival Airport" />
          </Box>
        </Flex>
      </Box>
    </div>
  </Flex>
)

export default FlightManualFields;
