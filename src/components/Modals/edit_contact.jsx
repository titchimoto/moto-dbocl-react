import React from 'react';
import Modal from '../Modals';
import {
  ModalContent,
  ModalHeader,
  ModalFooter
} from '../ui/modals';
import {CancelButton, SaveButton, TextLink} from '../ui/buttons';
import {AddIcon} from '../ui/icons';
import {FieldLabel, SelectInput, TextInput} from '../ui/inputs';
import {Flex, Box} from 'rebass/styled-components';
import EmailRow from '../Forms/add_email';
import PhoneRow from '../Forms/add_phone';

const EditContact = () => (
  <Modal maxWidth="925px">
    {/* Modal Header */}
    <ModalHeader>Edit Mellie Deane</ModalHeader>
    <ModalContent>
      {/* Edit Contact Fields */}
      <div className="padding-div">
        <Flex flexWrap="wrap" px={2}>
          <Box width={6/12} px={2}>
            <SelectInput label="Name">
              <option value="work">Work</option>
              <option value="home">Home</option>
            </SelectInput>
          </Box>
          <Box width={6/12} px={2}>
            <TextInput label="Title" />
          </Box>
          <Box width={6/12} px={2}>
            <SelectInput label="Relationship to Theo Deane">
              <option value="stylist">Stylist</option>
              <option value="manager">Manager</option>
            </SelectInput>
          </Box>
        </Flex>
      </div>
      {/* Email Section */}
      <Flex justifyContent="space-around">
        <Box width="100%">
          <Flex mx={-2} alignItems="center">
            <Box width={5/12} px={2}>
              <FieldLabel>Email</FieldLabel>
            </Box>
            <Box width={4/12} px={2}>
              <FieldLabel>Type</FieldLabel>
            </Box>
            <Box width={1/12} px={2}>
              <FieldLabel>Primary?</FieldLabel>
            </Box>
            <Box width={2/12} px={2}>
            </Box>
        </Flex>
        <EmailRow />
        <TextLink color="#2ED47A"><AddIcon />Add Email</TextLink>
      </Box>
      {/* Phone Section */}
      <Box width="100%">
        <Flex mx={-2} alignItems="center">
          <Box width={5/12} px={2}>
            <FieldLabel>Phone Number</FieldLabel>
          </Box>
          <Box width={4/12} px={2}>
            <FieldLabel>Type</FieldLabel>
          </Box>
          <Box width={1/12} px={2}>
            <FieldLabel>Primary?</FieldLabel>
          </Box>
          <Box width={2/12} px={2}>
          </Box>
        </Flex>
        <PhoneRow />
        <TextLink color="#2ED47A"><AddIcon />Add Phone Number</TextLink>
      </Box>
    </Flex>
    </ModalContent>
    {/* Modal Footer */}
    <ModalFooter>
      <CancelButton />
      <SaveButton />
    </ModalFooter>
  </Modal>
)

export default EditContact;
