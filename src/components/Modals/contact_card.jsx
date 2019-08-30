import React, { Component } from 'react';
import StatusButton from '../StatusButton';
import Modal from '../Modals';
import {
  ModalContent,
  ModalHeader,
  ModalFooter
} from '../ui/modals';
import {CancelButton, SaveButton, TextLink} from '../ui/buttons';
import {ProfileImage, EmailIcon, PhoneIcon, HouseIcon} from '../ui/icons';
import {Flex} from 'rebass/styled-components';

class ContactCard extends Component {
  render() {
    return (
      <Modal maxWidth="520px">
        <ModalHeader>Theo Deane's Information</ModalHeader>
        <ModalContent>
        <Flex ml={-4} p={4} alignItems="flex-start" justifyContent="center">
          <Flex mr={3} alignItems="center" justifyContent="flex-start">
            <ProfileImage src="https://i.imgur.com/KNFkYkz.jpg" />
          </Flex>
            <div class="person-contact-section">
              <h3 class="inline">Theo Deane</h3><StatusButton>New</StatusButton>
              <p class="extra-small grey">Talent -> Cats</p>
              <div>
                <EmailIcon /><span>work: </span><TextLink href="mailto:#">theo@meowmeow.com</TextLink>
              </div>
              <div>
                <EmailIcon /><span>work: </span><TextLink href="mailto:#">theo@meowmeow.com</TextLink>
              </div>
              <p class="small"><PhoneIcon /><span>work: </span> (123) 456-7890</p>
              <p class="small"><PhoneIcon /><span>home: </span> (555) 555-5555</p>
              <p class="small"><HouseIcon />25 Mootown Lane, Portland, Oregon, 97214</p>
            </div>
          </Flex>
          <Flex justifyContent="space-evenly">
            <Flex flexDirection="column">
              <h5>Recent Events</h5>
                <TextLink>Theo's Big Birthday Bash</TextLink>
                <TextLink>The Grammy's</TextLink>
                <TextLink>The Rugby World Cup 2019</TextLink>
                <TextLink>Mellie's Birthday</TextLink>
                <TextLink>The NBA Finals</TextLink>
                <TextLink>see more</TextLink>
            </Flex>
            <Flex flexDirection="column">
              <h5>Recent Events</h5>
                <TextLink>Mickey Mouse</TextLink>
                <TextLink>Mellie Deane</TextLink>
                <TextLink>Buzz Lightyear</TextLink>
                <TextLink>Winnie The Pooh</TextLink>
                <TextLink>Owen Farrell</TextLink>
                <TextLink>see more</TextLink>
            </Flex>
          </Flex>
        </ModalContent>
        <ModalFooter>
          <CancelButton />
          <SaveButton />
        </ModalFooter>
      </Modal>
    )
  }
}

export default ContactCard;
