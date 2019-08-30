import React, { Component } from 'react';
import {Flex, Box} from 'rebass/styled-components';
import FlightResultsRow from './flight_results_row';
import {PrimaryButton, SecondaryButton} from '../ui/buttons';
import {Divider} from '../ui/containers';
import {FieldLabel} from '../ui/inputs';
import {FLIGHT_RESULTS} from '../../data';


class FlightSearchResults extends Component {
  render() {
    const {flightResults} = this.props;
    return (
      <div>
        {flightResults && (
          <Flex pb={4} flexDirection="column" alignItems="center">
            <Box py={2}>
              <h3>No flights found.</h3>
            </Box>
            <Box py={2}>
              Can't find what you're looking for?
              <SecondaryButton color="#2ED47A">+ Add Flight Details Manually</SecondaryButton>
            </Box>
          </Flex>
        )}
        {!flightResults && (
          <Box pb={4}>
            <Flex alignItems="center">
              <Box width={1/12}>
                <FieldLabel>Time</FieldLabel>
              </Box>
              <Box width={1/12}>
                <FieldLabel>Flight #</FieldLabel>
              </Box>
              <Box width={3/12}>
                <FieldLabel>Airline</FieldLabel>
              </Box>
              <Box width={5/12}>
                <FieldLabel>Route</FieldLabel>
              </Box>
            </Flex>
            {FLIGHT_RESULTS.map(({time, flightNumber, airline, route}) => (
              <FlightResultsRow
                time={time}
                flightNumber={flightNumber}
                airline={airline}
                route={route}
              />
            ))}
            <Flex py={3} justifyContent="flex-end">
              <PrimaryButton>Add Connecting Flight</PrimaryButton>
            </Flex>
          </Box>
        )}
      </div>
    )
  }
}

export default FlightSearchResults;
