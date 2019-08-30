import React from 'react';
import {DateRowContainer} from '../ui/containers';
import {CalendarIcon} from '../ui/icons';

const DateRow = ({date, ...props}) => (
  <DateRowContainer {...props}>
    <CalendarIcon />
    <span>{date}</span>
  </DateRowContainer>
)

export default DateRow;
