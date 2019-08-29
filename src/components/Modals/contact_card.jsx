import React, { Component } from 'react';
import StatusButton from '../StatusButton';
import Modal from '../Modals';
import {
  ModalOverlay,
  ModalContainer,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalFooter
} from '../ui/modals';
import {CancelButton, SaveButton, TextLink} from '../ui/buttons';
import {FlexContainer} from '../ui/containers';
import {EmailIcon, PhoneIcon, AddIcon, HouseIcon} from '../ui/icons';

class ContactCard extends Component {
  render() {
    return (
      <Modal maxWidth="520px">
        <ModalHeader>Theo Deane's Information</ModalHeader>
        <ModalContent>
          <FlexContainer className="center" padding="40px">
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
          </FlexContainer>
          <FlexContainer className="space-evenly">
            <div>
              <h5>Recent Events</h5>
              <div>
                <TextLink>Theo's Big Birthday Bash</TextLink>
              </div>
              <div>
                <TextLink>The Grammy's</TextLink>
              </div>
              <div>
                <TextLink>The Rugby World Cup 2019</TextLink>
              </div>
              <div>
                <TextLink>Mellie's Birthday</TextLink>
              </div>
              <div>
                <TextLink>The NBA Finals</TextLink>
              </div>
              <div>
                <TextLink>see more</TextLink>
              </div>
            </div>
            <div>
              <h5>Recent Events</h5>
              <div>
                <TextLink>Mickey Mouse</TextLink>
              </div>
              <div>
                <TextLink>Mellie Deane</TextLink>
              </div>
              <div>
                <TextLink>Buzz Lightyear</TextLink>
              </div>
              <div>
                <TextLink>Winnie The Pooh</TextLink>
              </div>
              <div>
                <TextLink>Owen Farrell</TextLink>
              </div>
              <div>
                <TextLink>see more</TextLink>
              </div>
            </div>
          </FlexContainer>
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
