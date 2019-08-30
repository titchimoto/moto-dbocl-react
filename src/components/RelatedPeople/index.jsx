import React from 'react';
import RelatedPeopleRow from './related_people_row';
import {RELATED_PEOPLE} from '../../data';
import {AddButton} from '../ui/buttons';
import {Flex} from 'rebass/styled-components';
import {Divider, Container} from '../ui/containers';

const RelatedPeople = () => (
  <div>
    <Container className="padding-10">
      <Flex alignItems="center" justifyContent="space-between">
        <h5>Related People</h5>
        <AddButton>+</AddButton>
      </Flex>
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
