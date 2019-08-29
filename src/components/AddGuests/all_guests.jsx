import React from 'react';
import {PopOutContainer} from '../ui/containers';
import {Flex, Box} from 'rebass/styled-components';
import {CONTACTS} from '../../data';

const AllGuests = () => (
  <PopOutContainer>
    <Flex flexDirection="column">
      {CONTACTS.map(({name, title}) => (
        <Box py={2}>
          <p className="small">{name}</p>
          <p className="small grey">{title}</p>
        </Box>
      ))}
    </Flex>
  </PopOutContainer>
)

export default AllGuests;
