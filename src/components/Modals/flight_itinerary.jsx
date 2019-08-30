import React, { Component } from 'react';
import Modal from '../Modals';
import AddGuests from '../AddGuests';
import {ModalHeader, ModalContent, ModalFooter} from '../ui/modals';
import {CancelButton, SaveButton} from '../ui/buttons';
import FlightSearch from '../Forms/flight_search';
import FlightPassengerRow from '../Forms/flight_passenger_row';
import FlightSearchResults from '../Forms/flight_search_results';
import FlightManualFields from '../Forms/flight_manual_fields';
import {FieldLabel} from '../ui/inputs';
import {FLIGHT_PASSENGERS} from '../../data';
import {Flex, Box} from 'rebass/styled-components';
import {Divider} from '../ui/containers';

class FlightItinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Modal maxWidth="950px">
        {/* Modal Header */}
        <ModalHeader>Flight Itinerary</ModalHeader>
        {/* Add Guests */}
        <AddGuests />
        <ModalContent>
          {/* Flight Search API */}
          <FlightSearch />
          {/* Flight Search Results */}
          <FlightSearchResults />
          <Divider />

          {/* Flight Manual Entry Fields */}
          <FlightManualFields />
          <Divider />

          {/* Passenger Rows */}
          <Box my={4}>
            <h5>Passengers</h5>
          </Box>
          <Flex mx={-2} alignItems="center">
            <Box width={0.5/12} px={1}></Box>
            <Box width={2.5/12} px={1}>
              <FieldLabel>Name</FieldLabel>
            </Box>
            <Box width={1.5/12} px={1}>
              <FieldLabel>Date of birth</FieldLabel>
            </Box>
            <Box width={1/12} px={1}>
              <FieldLabel>Traveler #</FieldLabel>
            </Box>
            <Box width={1/12} px={1}>
              <FieldLabel>Seat #</FieldLabel>
            </Box>
            <Box width={1/12} px={1}>
              <FieldLabel>Class</FieldLabel>
            </Box>
            <Box width={1.5/12} px={1}>
              <FieldLabel>Confirmation #</FieldLabel>
            </Box>
            <Box width={2/12} px={1}>
              <FieldLabel>Additional Info</FieldLabel>
            </Box>
            <Box width={1/12} px={1}></Box>
          </Flex>
          {FLIGHT_PASSENGERS.map(({name ,dob, travelerNumber, seatNumber, flightClass, confirmation, additional}) => (
            <FlightPassengerRow
              name={name}
              dob={dob}
              travelerNumber={travelerNumber}
              seatNumber={seatNumber}
              flightClass={flightClass}
              confirmation={confirmation}
              additional={additional}
            />
          ))}

        </ModalContent>
        {/* Modal Footer */}
        <ModalFooter>
          <CancelButton />
          <SaveButton />
        </ModalFooter>
      </Modal>
    )
  }
}

export default FlightItinerary;
