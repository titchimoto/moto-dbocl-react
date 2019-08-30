import React, { Component } from 'react'
import {Flex, Box} from 'rebass/styled-components';
import {TextInput} from '../ui/inputs';
import {PrimaryButton} from '../ui/buttons';
import {Divider} from '../ui/containers';

class VehiclePickupFields extends Component {
  render() {
    const {addVehicleStop} = this.props;
    return (
      <div>
        <Divider />
        <Flex width="100%" justifyContent='space-around'>
          <div className="padding-div">
          <Box width={1/1} px ={3}>
              <Flex flexDirection="column">
                <Flex>
                  <Box width={1/2}>
                    <TextInput label="Pickup Date" required />
                  </Box>
                  <Box width={1/2}>
                    <TextInput label="Pickup Time" required />
                  </Box>
                </Flex>
                <Box width={1/1}>
                  <TextInput label="Pickup Address" required />
                </Box>
                <Box width={1/1}>
                  <TextInput label="Pickup Location Note" />
                </Box>
              </Flex>
            </Box>
          </div>
          <div className="padding-div">
            <Box width={1/1} px={3}>
              <Flex flexDirection="column">
                <Box width={1/1}>
                  <TextInput label="Instruction" required />
                </Box>
                <Box width={1/1}>
                  <TextInput label="Dropoff Address" required />
                </Box>
                <Box width={1/1}>
                  <TextInput label="Dropoff Location Note" />
                </Box>
              </Flex>
            </Box>
          </div>
        </Flex>
        <Flex justifyContent="flex-end" mb={2}>
          <PrimaryButton onClick={addVehicleStop}>+ Add Additional Stop</PrimaryButton>
        </Flex>
      </div>
    )
  }
}

export default VehiclePickupFields;
