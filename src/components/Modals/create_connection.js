import React from 'react';
import Modal from '../Modals';
import {
  ModalContent,
  ModalHeader,
  ModalFooter
} from '../ui/modals';
import {CancelButton, SaveButton} from '../ui/buttons';
import {Flex, Box} from 'rebass/styled-components';
import {FieldLabel} from '../ui/inputs';
import NewConnectionRow from '../Forms/new_connection_row';
import PreviousConnectionRow from '../Forms/previous_connection_row';

const CreateConnections = () => (
  <Modal maxWidth="925px">
    <ModalHeader>Connect People to Theo Deane</ModalHeader>
    <ModalContent>
      {/* Create a New Connection */}
      <div className="padding-div">
        <h4>Create a New Connection</h4>
        <div className="padding-div">
          <Flex mx={-2} alignItems="center">
            <Box width={2/12} px={2}>
              <FieldLabel>Name</FieldLabel>
            </Box>
            <Box width={2/12} px={2}>
              <FieldLabel>Relationship</FieldLabel>
            </Box>
            <Box width={3/12} px={2}>
              <FieldLabel>Email</FieldLabel>
            </Box>
            <Box width={3/12} px={2}>
              <FieldLabel>Phone</FieldLabel>
            </Box>
              <Box width={2/12} px={2}>
            </Box>
          </Flex>
        </div>
        <NewConnectionRow />
        <NewConnectionRow />
      </div>
      {/* Add Previous Connection */}
      <div className="padding-div">
        <h4>Previously Added Connections</h4>
        <p>Add a previously connected person to Theo Deane</p>
        <div className="padding-div">
          <Flex mx={-2} alignItems="center">
            <Box width={1/12} px={2}>
              <FieldLabel>Image</FieldLabel>
            </Box>
            <Box width={3/12} px={2}>
              <FieldLabel>Name</FieldLabel>
            </Box>
            <Box width={2/12} px={2}>
              <FieldLabel>Relationship</FieldLabel>
            </Box>
            <Box width={2/12} px={2}>
              <FieldLabel>Email</FieldLabel>
            </Box>
            <Box width={2/12} px={2}>
              <FieldLabel>Phone</FieldLabel>
            </Box>
              <Box width={2/12} px={2}>
            </Box>
          </Flex>
        </div>
        <PreviousConnectionRow />
        <PreviousConnectionRow />
      </div>
    </ModalContent>
    <ModalFooter>
      <CancelButton />
      <SaveButton />
    </ModalFooter>
  </Modal>
)

export default CreateConnections;
