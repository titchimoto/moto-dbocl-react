import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import ContactCard from '../components/Modals/contact_card';
import CreateConnections from '../components/Modals/create_connection';
import EditContact from '../components/Modals/edit_contact';
import EventItinerary from '../components/Modals/event_itinerary';
import VehicleItinerary from '../components/Modals/vehicle_itinerary';
import HotelItinerary from '../components/Modals/hotel_itinerary';
import FlightItinerary from '../components/Modals/flight_itinerary';
import Sidebar from '../components/Sidebar';

storiesOf('Modals & Forms', module)
  .add('Contact Card', () => <ContactCard />)
  .add('Create Connections', () => <CreateConnections />)
  .add('Edit Contact', () => <EditContact />)
  .add('Event Itinerary', () => <EventItinerary />)
  .add('Vehicle Itinerary', () => <VehicleItinerary />)
  .add('Hotel Itinerary', () => <HotelItinerary />)
  .add('Flight Itinerary', () => <FlightItinerary />)
  .add('Notes & Files Sidebar', () => <Sidebar />)
