import React from 'react';
import StatusButton from '../StatusButton';
import {Container} from '../ui/containers';
import {TextLink} from '../ui/buttons';

const EntityContact = () => (
  <Container padding="10px 40px">
    <div class="person-contact-section">
      <h4 class="inline">Theo Deane</h4><StatusButton>New</StatusButton>
      <p class="extra-small grey">Talent -> Cats</p>
      <TextLink href="mailto:#">theo@meowmeow.com</TextLink>
      <p class="small">(123) 456-7890</p>
      <TextLink color="#2ED47A">Add Email or Phone Number</TextLink>
    </div>
  </Container>
)

export default EntityContact;
