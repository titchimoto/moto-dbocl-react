import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import EmailRow from '../components/Forms/add_email';
import PhoneRow from '../components/Forms/add_phone';
import CallOffset from '../components/Forms/call_offset';
import DateTime from '../components/Forms/date_time';
import NewConnectionRow from '../components/Forms/new_connection_row';
import PreviousConnectionRow from '../components/Forms/previous_connection_row';
import NewEventItinerary from '../components/Forms/new_event_itinerary';
import ExistingEventItinerary from '../components/Forms/existing_event_itinerary';
import AddGuests from '../components/AddGuests';
import VehicleItineraryFields from '../components/Forms/vehicle_itinerary_fields';
import VehiclePickupFields from '../components/Forms/vehicle_pickup_fields';

storiesOf('Forms', module)
  .add('Add Email Row', () => <EmailRow />)
  .add('Add Phone Row', () => <PhoneRow />)
  .add('Add New Connection Row', () => <NewConnectionRow />)
  .add('Add Previous Connection Row', () => <PreviousConnectionRow />)
  .add('Call Offset', () => <CallOffset />)
  .add('Date & Time', () => <DateTime />)
  .add('New Event Itinerary', () => <NewEventItinerary />)
  .add('Existing Event Itinerary', () => <ExistingEventItinerary />)
  .add('Add Guests', () => <AddGuests />)
  .add('Vehicle Itinerary Fields', () => <VehicleItineraryFields />)
  .add('Vehicle Pickup Fields', () => <VehiclePickupFields />)
