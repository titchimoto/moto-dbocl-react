import React, { Component } from 'react';
import {SearchInput, DateInput} from '../ui/inputs';
import {AddButton, NavLink} from '../ui/buttons';
import {FlexContainer, FlexColumn} from '../ui/containers';

class ScheduleFilter extends Component {
  render() {
    return (
      <div>
        <FlexContainer className="flex-start">
          <NavLink>ITINERARIES</NavLink>
          <NavLink>DEAL</NavLink>
        </FlexContainer>
        <FlexContainer className="flex-start">
          <SearchInput placeholder="Search Theo's Schedule" /><AddButton />
          <FlexColumn>
            <label className="small" for="start-date">Filter Start Date</label>
            <DateInput />
          </FlexColumn>
          <span>to</span>
          <FlexColumn>
            <label className="small" for="start-date">Filter End Date</label>
            <DateInput />
          </FlexColumn>
          <div>
            <button>ICON</button>
            <button>ICON</button>
          </div>
        </FlexContainer>
      </div>
    )
  }
}

export default ScheduleFilter;
