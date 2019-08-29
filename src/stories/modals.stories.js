import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import ContactCard from '../components/Modals/contact_card';
import CreateConnections from '../components/Modals/create_connection';
import EditContact from '../components/Modals/edit_contact';
import NewEventItinerary from '../components/Modals/new_event_itinerary';

storiesOf('Modals & Forms', module)
  .add('Contact Card', () => <ContactCard />)
  .add('Create Connections', () => <CreateConnections />)
  .add('Edit Contact', () => <EditContact />)
  .add('New Event Itinerary', () => <NewEventItinerary />)
