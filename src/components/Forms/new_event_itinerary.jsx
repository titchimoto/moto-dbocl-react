import React, { Component } from 'react';
import {Flex, Box} from 'rebass/styled-components';
import Modal from '../Modals';
import DateTime from '../Forms/date_time';
import CallOffset from '../Forms/call_offset';
import {
  ModalContent,
  ModalHeader,
  ModalFooter
} from '../ui/modals';
import {CancelButton, SaveButton} from '../ui/buttons';
import {TextInput} from '../ui/inputs';


class NewEventItinerary extends Component {
  render() {
    return (
      <Flex width="100%" justifyContent='space-around'>
        <div className="padding-div">
        <Box width={1/1} px ={3}>
            <Flex flexDirection="column">
              <Box width={1/1}>
                <TextInput label="Name" required />
              </Box>
              <Box width={1/1}>
                <TextInput label="Location Address" />
              </Box>
              <Box width={1/1}>
                <TextInput label="Location Note" />
              </Box>
              <Box width={1/1}>
                <TextInput label="Additional Information" />
              </Box>
            </Flex>
          </Box>
        </div>
        <div className="padding-div">
          <Box width={1/1} px={3}>
            <Flex flexDirection="column">
              <Box width={1/1}>
                <DateTime />
              </Box>
              <Box width={1/1}>
                <CallOffset />
              </Box>
            </Flex>
          </Box>
        </div>
      </Flex>
    )
  }
}

export default NewEventItinerary
