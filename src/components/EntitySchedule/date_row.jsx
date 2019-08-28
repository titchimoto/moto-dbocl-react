import React from 'react';
import {DateRowContainer} from '../ui/containers';
import {CalendarIcon} from '../ui/icons';

const DateRow = ({date}) => (
  <DateRowContainer>
    <CalendarIcon />
    <span>{date}</span>
  </DateRowContainer>
)

export default DateRow;
