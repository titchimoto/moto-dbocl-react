import React from 'react';
import RelatedPeopleRow from './related_people_row';
import {RELATED_PEOPLE} from '../../data';
import {AddButton} from '../ui/buttons';
import {FlexContainer, Divider, Container} from '../ui/containers';

const RelatedPeople = () => (
  <div>
    <Container className="padding-10">
      <FlexContainer className="space-between">
        <h5>Related People</h5>
        <AddButton>+</AddButton>
      </FlexContainer>
    </Container>
    <Divider />
    {RELATED_PEOPLE.map(({name, title, email, phone}) => (
      <RelatedPeopleRow
        name={name}
        title={title}
        email={email}
        phone={phone}
      />
    ))}
  </div>
)

export default RelatedPeople;
