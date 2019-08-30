import React from 'react';
import {Flex, Box} from 'rebass/styled-components';
import {Row} from '../ui/containers';
import {SecondaryButton} from '../ui/buttons';

const FlightResultsRow = ({time, airline, flightNumber, route}) => (
  <Row>
    <Flex px={2} py={3} alignItems="center">
      <Box width={1/12}>
        <p>{time}</p>
      </Box>
      <Box width={1/12}>
        <p>{flightNumber}</p>
      </Box>
      <Box width={3/12}>
        <p>{airline}</p>
      </Box>
      <Box width={5/12}>
        <p>{route}</p>
      </Box>
      <Box width={2/12}>
        <SecondaryButton color="#F7685B">Remove</SecondaryButton>
      </Box>
    </Flex>
  </Row>
)

export default FlightResultsRow;
