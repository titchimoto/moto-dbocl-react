import React, { Component } from 'react';
import Modal from '../Modals';
import AddGuests from '../AddGuests';
import HotelItineraryFields from '../Forms/hotel_itinerary_fields';
import {ModalHeader, ModalContent, ModalFooter} from '../ui/modals';
import {CancelButton, SaveButton} from '../ui/buttons';
import HotelGuestRow from '../Forms/hotel_guest_row';
import {Flex, Box} from 'rebass/styled-components';
import {FieldLabel} from '../ui/inputs';
import {HOTEL_GUESTS} from '../../data';

class HotelItinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Modal maxWidth="1050px">
        {/* Modal Header */}
        <ModalHeader>Hotel Itinerary</ModalHeader>
        {/* Add Guests */}
        <AddGuests />
        <ModalContent>
          <HotelItineraryFields />
          <div className="padding-div">
            <h4>Guests</h4>
          </div>
          <Flex mx={-2} alignItems="center">
            <Box width={0.5/12} px={1}></Box>
            <Box width={2.5/12} px={1}>
              <FieldLabel>Reservation Name</FieldLabel>
            </Box>
            <Box width={1/12} px={1}>
              <FieldLabel>Check-in</FieldLabel>
            </Box>
            <Box width={1/12} px={1}>
              <FieldLabel>Check-out</FieldLabel>
            </Box>
            <Box width={1/12} px={1}>
              <FieldLabel>Room type</FieldLabel>
            </Box>
            <Box width={1.5/12} px={1}>
              <FieldLabel>Room options</FieldLabel>
            </Box>
            <Box width={1.5/12} px={1}>
              <FieldLabel>Confirmation #</FieldLabel>
            </Box>
            <Box width={2/12} px={1}>
              <FieldLabel>Additional Info</FieldLabel>
            </Box>
            <Box width={1/12} px={1}></Box>
          </Flex>
          {HOTEL_GUESTS.map(({name, checkin, checkout, roomType, roomOptions, confirmation}) => (
            <HotelGuestRow
              name={name}
              checkin={checkin}
              checkout={checkout}
              roomType={roomType}
              roomOptions={roomOptions}
              confirmation={confirmation}
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

export default HotelItinerary;
