import React from 'react';
import StatusButton from '../StatusButton';
import {Container} from '../ui/containers';
import {TextLink} from '../ui/buttons';
import {EmailIcon, PhoneIcon, AddIcon} from '../ui/icons';

const EntityContact = () => (
  <Container padding="20px 40px">
    <div class="person-contact-section">
      <h4 class="inline">Theo Deane</h4><StatusButton>New</StatusButton>
      <p class="extra-small grey">Talent -> Cats</p>
      <TextLink href="mailto:#"><EmailIcon />theo@meowmeow.com</TextLink>
      <p class="small"><PhoneIcon />(123) 456-7890</p>
      <TextLink color="#2ED47A"><AddIcon />Add Email or Phone Number</TextLink>
    </div>
  </Container>
)

export default EntityContact;
