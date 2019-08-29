import React, { Component} from 'react';
import {Flex, Box} from 'rebass/styled-components';
import AddGuestsForm from '../Forms/add_guests';
import AllGuests from './all_guests';
import HoverImage from '../HoverImage';
import {PrimaryButton} from '../ui/buttons';
import {ChevronIcon} from '../ui/icons';

import {CONTACTS} from '../../data';

class AddGuests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showAllGuests: false,
    }
  }

  handleShowForm = () => this.setState(({showForm}) => ({showForm: !showForm}))
  handleShowAllGuests = () => this.setState({showAllGuests: true})
  handleHideAllGuests = () => this.setState({showAllGuests: false})

  render() {
    const {showForm, showAllGuests} = this.state;
    return(
      <Box px={4} pt={4}>
        <Flex alignItems="center">
          <PrimaryButton invert onClick={this.handleShowForm}>+ Add Guests</PrimaryButton>
          {CONTACTS.map(({imageUrl, name, title}) => (
            <Flex flexDirection="column" justifyContent="center" alignItems="center" pr={2}>
              <HoverImage
                spaced
                imageUrl={imageUrl}
                name={name}
                title={title}
              />
            </Flex>
          ))}
          <div onMouseEnter={this.handleShowAllGuests} onMouseLeave={this.handleHideAllGuests}>
            <ChevronIcon>
              Show all
            </ChevronIcon>
          </div>
          {showAllGuests && <div style={{right: '80px', position: 'relative'}}><AllGuests /></div>}
        </Flex>
        {showForm && <AddGuestsForm />}
      </Box>
    )
  }
}

export default AddGuests;
