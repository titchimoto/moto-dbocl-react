import React from 'react';
import StatusButton from '../StatusButton';
import {Container} from '../ui/containers';
import {TextLink} from '../ui/buttons';
import {ProfileImage, EmailIcon, PhoneIcon, AddIcon} from '../ui/icons';
import {Flex} from 'rebass/styled-components';


const EntityContact = () => (
  <Container padding="20px 40px">
    <Flex ml={-5} alignItems="flex-start" justifyContent="center">
      <Flex mr={2} alignItems="center" justifyContent="flex-start">
        <ProfileImage src="https://i.imgur.com/KNFkYkz.jpg" />
      </Flex>
      <div class="person-contact-section">
        <h3 class="inline">Theo Deane</h3><StatusButton>New</StatusButton>
        <p class="extra-small grey">Talent -> Cats</p>
        <TextLink href="mailto:#"><EmailIcon />theo@meowmeow.com</TextLink>
        <p class="small"><PhoneIcon />(123) 456-7890</p>
        <TextLink color="#2ED47A"><AddIcon />Add Email or Phone Number</TextLink>
      </div>
    </Flex>
  </Container>
)

export default EntityContact;
