import React, { Component } from 'react';
import Modal from '../Modals';
import AddGuests from '../AddGuests';
import VehiclePickupFields from '../Forms/vehicle_pickup_fields';
import VehicleItineraryFields from '../Forms/vehicle_itinerary_fields';
import {ModalHeader, ModalContent, ModalFooter} from '../ui/modals';
import {CancelButton, SaveButton} from '../ui/buttons';

class VehicleItinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleStops: [1],
    }
  }

  addVehicleStop = () => this.setState(({vehicleStops}) => ({vehicleStops: [ vehicleStops.length + 1, ...vehicleStops]}))

  render() {
    const {vehicleStops} = this.state;
    return (
      <Modal maxWidth="950px">
        {/* Modal Header */}
        <ModalHeader>Car Pickup Itinerary</ModalHeader>
        {/* Add Guests */}
        <AddGuests />
        <ModalContent>
          <VehicleItineraryFields />
          {vehicleStops.map((stop) => (
            <VehiclePickupFields addVehicleStop={this.addVehicleStop} />
          ))}
        </ModalContent>
        {/* Modal Footer */}
        <ModalFooter>
          <CancelButton />
          <SaveButton />
        </ModalFooter>
      </Modal>
    )
  }
}

export default VehicleItinerary;
