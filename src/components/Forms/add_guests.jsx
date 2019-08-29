import React, { Component} from 'react';
import {Flex, Box} from 'rebass/styled-components';
import {PrimaryButton} from '../ui/buttons';
import {PopOutContainer, Divider} from '../ui/containers';
import {SearchInput, CheckboxInput} from '../ui/inputs';
import {CONTACTS} from '../../data'

class AddGuestsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    }
  }

  render() {
    return(
      <PopOutContainer>
        <Flex flexDirection="column">
          <SearchInput placeholder="Search existing contacts" />
          <Divider />
          <div className="padding-div">
            {CONTACTS.map(({name, title}) => (
              <Flex justifyContent="space-between" pb={2}>
                <Box width={10/12} pb={2}>
                  <p>{name}</p>
                  <p className="small grey">{title}</p>
                </Box>
                <Box width={2/12}>
                  <CheckboxInput />
                </Box>
              </Flex>
            ))}
          </div>
          <PrimaryButton invert>Select All</PrimaryButton>
        </Flex>
      </PopOutContainer>
    )
  }
}

export default AddGuestsForm;
