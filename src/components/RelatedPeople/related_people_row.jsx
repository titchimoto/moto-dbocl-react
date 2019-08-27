import React from 'react';
import {FlexContainer, RelatedPeopleContainer, Divider} from '../ui/containers';
import {TextLink} from '../ui/buttons';


const RelatedPeopleRow = ({name, title, email, phone}) => (
  <>
  <RelatedPeopleContainer>
    <FlexContainer className="space-between">
      <div>
        <h5>{name}</h5>
        <p className="extra-small grey">{title}</p>
        <TextLink>{email}</TextLink>
        <p className="small">{phone}</p>
        <TextLink color="#2ED47A">Add Email or Phone Number</TextLink>
      </div>
      <div>
        <button className="icon">ICON</button>
        <button className="icon">ICON</button>
        <button className="icon">ICON</button>
      </div>
    </FlexContainer>
  </RelatedPeopleContainer>
  <Divider />
  </>
)

export default RelatedPeopleRow;
