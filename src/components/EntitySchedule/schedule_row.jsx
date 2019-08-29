import React from 'react';
import {ScheduleRowContainer, ScheduleRowGrid, FlexColumn} from '../ui/containers';
import StatusButton from '../StatusButton';
import {CalendarIcon} from '../ui/icons';

const ScheduleRow = ({time, subtime, name, details, guests}) => (
  <div>
    <ScheduleRowContainer>
      <ScheduleRowGrid>
        <CalendarIcon color="#323C47" />
        <FlexColumn>
          <span className="grid-column-2 bold">{time}</span>
          <span className="grid-column-2 small grey">{subtime}</span>
        </FlexColumn>
        <FlexColumn>
          <span className="grid-column-3 bold">{name}</span>
          <span className="grid-column-3 small grey">{details}</span>
        </FlexColumn>
        <FlexColumn>
          <span className="grid-column-4">{guests}</span>
        </FlexColumn>
        <span className="grid-column-5"><StatusButton>New</StatusButton></span>
      </ScheduleRowGrid>
    </ScheduleRowContainer>
  </div>
)

export default ScheduleRow;
