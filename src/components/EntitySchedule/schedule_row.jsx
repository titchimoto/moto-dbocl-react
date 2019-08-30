import React from 'react';
import {ScheduleRowContainer} from '../ui/containers';
import StatusButton from '../StatusButton';
import {CalendarIcon} from '../ui/icons';
import {Flex, Box} from 'rebass/styled-components';

const ScheduleRow = ({time, subtime, name, details, guests}) => (
  <ScheduleRowContainer>
    <Flex alignItems="center" height="100%">
      <Box width={1/12} px={1}>
        <CalendarIcon color="#323C47" />
      </Box>
      <Box width={2/12} px={1}>
        <p>{time}</p>
        <p className="small grey">{subtime}</p>
      </Box>
      <Box width={5/12} px={1}>
        <p>{name}</p>
        <p className="small grey">{details}</p>
      </Box>
      <Box width={2/12} px={1}>
        <p>{guests}</p>
      </Box>
      <Box width={2/12} px={1}>
        <StatusButton>New</StatusButton>
      </Box>
    </Flex>
  </ScheduleRowContainer>
)

export default ScheduleRow;
