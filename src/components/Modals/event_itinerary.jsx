import React, { Component } from 'react';
import {Flex, Box} from 'rebass/styled-components';
import Modal from '../Modals';
import AddGuests from '../AddGuests';
import {
  ModalContent,
  ModalHeader,
  ModalFooter
} from '../ui/modals';
import {CancelButton, SaveButton} from '../ui/buttons';
import {SelectInput} from '../ui/inputs';
import ExistingEventItinerary from '../Forms/existing_event_itinerary';
import NewEventItinerary from '../Forms/new_event_itinerary';

class EventItinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewEvent: false,
      showExistingEvent: false,
    }
  }

  handleSelect = ({target: {value}}) => {
    if (value === 'new') this.setState({showNewEvent: true, showExistingEvent: false})
    if (value === 'existing') this.setState({showExistingEvent: true, showNewEvent: false})
  }

  render() {
    const {showExistingEvent, showNewEvent} = this.state;
    const formDirty = showExistingEvent || showNewEvent;
    return (
      <Modal maxWidth="950px">
        {/* Modal Header */}
        <ModalHeader>Event Itinerary</ModalHeader>
        {/* Add Guests */}
        <AddGuests />
        <ModalContent>
          {!formDirty && (
            <Flex width="100%" justifyContent='center'>
              <Box width={1/2}>
                <SelectInput label="Event Name" value={this.state.value} onChange={this.handleSelect}>
                  <option value="-">-</option>
                  <option value="existing">July 9th 2019, 7:00pm - Technical Rehearsal</option>
                  <option value="new">+ Create New Event</option>
                </SelectInput>
              </Box>
              </Flex>
          )}

          {/* New Event Itinerary Form */}
          {showNewEvent && <NewEventItinerary />}
          {/* Existing Event Itinerary Form */}
          {showExistingEvent && <ExistingEventItinerary />}
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

export default EventItinerary
