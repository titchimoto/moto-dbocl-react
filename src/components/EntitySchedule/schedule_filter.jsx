import React, { Component } from 'react';
import { Flex } from 'rebass/styled-components';
import { SearchInput, DateInput } from '../ui/inputs';
import { AddButton, NavLink } from '../ui/buttons';
import { FilterIcon, ReportIcon } from '../ui/icons';
import { PopOutContainer } from '../ui/containers';

class ScheduleFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    }
  }

  handleShowMenu = () => this.setState(({ showMenu }) => ({ showMenu: !showMenu }))

  render() {
    const { showMenu } = this.state
    return (
      <div>
        <Flex justifyContent="flex-start">
          <NavLink>ITINERARIES</NavLink>
          <NavLink>DEAL</NavLink>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <SearchInput placeholder="Search Theo's Schedule" />
            <div>
              <AddButton onClick={this.handleShowMenu}>+</AddButton>
              {showMenu && (
                <PopOutContainer style={{marginTop: '10px'}}>
                  <Flex alignItems="flex-start" flexDirection="column">
                    <span>+ Event</span>
                    <span>+ Car</span>
                    <span>+ Flight</span>
                    <span>+ Hotel</span>
                  </Flex>
                </PopOutContainer>
              )}
            </div>
          </Flex>
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
