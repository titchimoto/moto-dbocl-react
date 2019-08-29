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

storiesOf('Forms', module)
  .add('Add Email Row', () => <EmailRow />)
  .add('Add Phone Row', () => <PhoneRow />)
  .add('Add New Connection Row', () => <NewConnectionRow />)
  .add('Add Previous Connection Row', () => <PreviousConnectionRow />)
  .add('Call Offset', () => <CallOffset />)
  .add('Date & Time', () => <DateTime />)
