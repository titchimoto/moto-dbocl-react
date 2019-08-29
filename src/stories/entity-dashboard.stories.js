import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// Components
import EntityContact from '../components/EntityContact';
import EntityDashboard from '../components/EntityDashboard';
import EntitySchedule from '../components/EntitySchedule';
import ScheduleFilter from '../components/EntitySchedule/schedule_filter';
import DateRow from '../components/EntitySchedule/date_row';
import ScheduleRow from '../components/EntitySchedule/schedule_row';
import Notes from '../components/Notes';
import NoteRow from '../components/Notes/note_row';
import RelatedPeople from '../components/RelatedPeople';
import RelatedPeopleRow from '../components/RelatedPeople/related_people_row';
import {ContentSection, Divider, Container} from '../components/ui/containers';

storiesOf('Entity Dashboard', module)
  .add('Entity Dashboard Full View', () =>
    <EntityDashboard />
  )
  .add('Entity Dashboard Contact Section', () =>
    <ContentSection className="left-content">
      <EntityContact />
      <Divider />
      <RelatedPeople />
      <Notes />
    </ContentSection>
  )
  .add('Main Notes Section', () =>
    <ContentSection className="left-content">
      <Notes />
    </ContentSection>
  )
  .add('Note row', () =>
    <ContentSection className="left-content">
      <NoteRow />
    </ContentSection>
  )
  .add('RelatedPeople', () =>
    <ContentSection className="left-content">
      <RelatedPeople />
    </ContentSection>
  )
  .add('RelatedPeople Row', () =>
    <ContentSection className="left-content">
      <RelatedPeopleRow email="mellie@meowmeow.com" phone="(555) 555-5555" />
    </ContentSection>
  )
  .add('Entity Dashboard Schedule Section', () =>
    <ContentSection className="right-content">
      <EntitySchedule />
    </ContentSection>
  )
  .add('Schedule Filters', () =>
    <ScheduleFilter />
  )
  .add('Date Row', () =>
    <Container className="padding-20">
      <DateRow date="Thurdsay 7 Jul 2019" />
    </Container>
  )
  .add('Schedule Item Row', () =>
    <Container className="padding-20">
      <ScheduleRow
        time="6:00pm"
        subtime="(to 10:00pm)"
        name="456"
        details="LAX (1 World Way, L.A, CA, 90045) -> DEN (12 Denver Road, Denver, CO, 12345)"
        guests="Theo Deane + 2"
      />
    </Container>
  )
