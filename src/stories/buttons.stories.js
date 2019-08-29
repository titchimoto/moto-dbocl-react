import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import {
  Status,
  AddButton,
  TextLink,
  NavLink,
  CancelButton,
  SaveButton,
  LabelButton,
} from '../components/ui/buttons';

storiesOf('Buttons', module)
  .add('Status Button', () => <Status>New</Status>)
  .add('Add Button', () => <AddButton>+</AddButton>)
  .add('Text Link', () => <TextLink>mellie@meowmeow.com</TextLink>)
  .add('Nav Link', () => <NavLink>Events</NavLink>)
  .add('Cancel Button', () => <CancelButton />)
  .add('Save Button', () => <SaveButton />)
  .add('Label Button', () =>
    <div>
      <LabelButton>+ 15</LabelButton>
      <LabelButton>+ 30</LabelButton>
      <LabelButton>+ 45</LabelButton>
      <LabelButton>+ 60</LabelButton>
    </div>
  )
