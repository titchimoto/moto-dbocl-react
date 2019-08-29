import React, { Component } from 'react';
import {Flex, Box} from 'rebass/styled-components';
import Modal from '../Modals';
import {
  ModalContent,
  ModalHeader,
  ModalFooter
} from '../ui/modals';
import {CancelButton, SaveButton} from '../ui/buttons';
import {FieldLabel, SelectInput, TextInput} from '../ui/inputs';

class NewEventItinerary extends Component {
  render() {
    return (
      <Modal maxWidth="950px">
        {/* Modal Header */}
        <ModalHeader>Event Itinerary</ModalHeader>
        <ModalContent>
          {/* Edit Contact Fields */}
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
                    <TextInput label="Name" required />
                  </Box>
                  <Box width={1/1}>
                    <TextInput label="Location Address" />
                  </Box>
                  <Box width={1/1}>
                    <TextInput label="Location Note" />
                  </Box>
                  <Box width={1}>
                    <TextInput label="Additional Information" />
                  </Box>
                </Flex>
              </Box>
            </div>
          </Flex>
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

export default NewEventItinerary
