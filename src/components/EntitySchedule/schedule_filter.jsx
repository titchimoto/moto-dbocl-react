import React, { Component } from 'react';
import {SearchInput, DateInput} from '../ui/inputs';
import {AddButton, NavLink} from '../ui/buttons';
import {FilterIcon, ReportIcon} from '../ui/icons';
import {Flex} from 'rebass/styled-components';

class ScheduleFilter extends Component {
  render() {
    return (
      <div>
        <Flex justifyContent="flex-start">
          <NavLink>ITINERARIES</NavLink>
          <NavLink>DEAL</NavLink>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <div>
            <SearchInput placeholder="Search Theo's Schedule" /><AddButton>+</AddButton>
          </div>
          <div>
            <Flex alignItems="center" justifyContent="space-between">
              <Flex flexDirection="column">
                <label className="small" for="start-date">Filter Start Date</label>
                <DateInput />
              </Flex>
              <span>to</span>
              <Flex flexDirection="column">
                <label className="small" for="start-date">Filter End Date</label>
                <DateInput />
              </Flex>
              <div>
                <FilterIcon />
                <ReportIcon />
              </div>
            </Flex>
          </div>
        </Flex>
      </div>
    )
  }
}

export default ScheduleFilter;
