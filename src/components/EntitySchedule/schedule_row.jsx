import React from 'react';
import {ScheduleRowContainer, ScheduleRowGrid, FlexColumn} from '../ui/containers';
import StatusButton from '../StatusButton';

const ScheduleRow = () => (
  <div>
    <ScheduleRowContainer>
      <ScheduleRowGrid>
        <span className="icon grid-column-1">ICON</span>
        <FlexColumn>
          <span className="grid-column-2">4:30pm</span>
          <span className="grid-column-2 small grey">(5:00pm to 9:00pm)</span>
        </FlexColumn>
        <FlexColumn>
          <span className="grid-column-3">The Main Event</span>
          <span className="grid-column-3 small grey">123 Mootown Lane, Portland, 97214</span>
        </FlexColumn>
        <FlexColumn>
          <span className="grid-column-4">Theo Deane + 1</span>
        </FlexColumn>
        <span className="grid-column-5"><StatusButton>New</StatusButton></span>
      </ScheduleRowGrid>
    </ScheduleRowContainer>
  </div>
)

export default ScheduleRow;
