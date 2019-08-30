import React from 'react';
import {Divider} from '../ui/containers';
import {TextLink} from '../ui/buttons';
import {Flex, Box} from 'rebass/styled-components';
import {
  PencilIcon,
  EmailIcon,
  PhoneIcon,
  AddIcon,
  SettingsIcon,
  ContactIcon,
} from '../ui/icons';

const RelatedPeopleRow = ({name, title, email, phone}) => (
  <>
    <Box p="20px">
      <Flex justifyContent="space-between">
        <div>
          <h5>{name}</h5>
          <p className="extra-small grey">{title}</p>
          <TextLink><EmailIcon />{email}</TextLink>
          <p className="small"><PhoneIcon />{phone}</p>
          <TextLink color="#2ED47A"><AddIcon />Add Email or Phone Number</TextLink>
        </div>
        <Flex alignItems="center" justifyContent="space-between">
          <ContactIcon />
          <PencilIcon />
          <SettingsIcon />
        </Flex>
      </Flex>
    </Box>
    <Divider />
  </>
)

export default RelatedPeopleRow;
