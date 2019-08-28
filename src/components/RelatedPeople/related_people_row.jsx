import React from 'react';
import {FlexContainer, RelatedPeopleContainer} from '../ui/containers';
import {TextLink} from '../ui/buttons';
import {
  PencilIcon,
  EmailIcon,
  PhoneIcon,
  AddIcon,
  SettingsIcon,
  ContactIcon,
} from '../ui/icons';

const RelatedPeopleRow = ({name, title, email, phone}) => (
  <RelatedPeopleContainer>
    <FlexContainer className="space-between">
      <div>
        <h5>{name}</h5>
        <p className="extra-small grey">{title}</p>
        <TextLink><EmailIcon />{email}</TextLink>
        <p className="small"><PhoneIcon />{phone}</p>
        <TextLink color="#2ED47A"><AddIcon />Add Email or Phone Number</TextLink>
      </div>
      <FlexContainer className="space-between">
        <ContactIcon />
        <PencilIcon />
        <SettingsIcon />
      </FlexContainer>
    </FlexContainer>
  </RelatedPeopleContainer>
)

export default RelatedPeopleRow;
