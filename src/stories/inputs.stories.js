import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import {SearchInput, DateInput, TextInput, SelectInput} from '../components/ui/inputs';

storiesOf('Inputs', module)
  .add('Search Input', () => <SearchInput placeholder="Search Notes..." />)
  .add('Date Input', () => <DateInput />)
  .add('Text Input with Label', () => <TextInput label="Title"/>)
  .add('Select Input with Label', () =>
    <SelectInput label="Relationship to Theo Deane">
      <option value="Stylist">Stylist</option>
    </SelectInput>
  )
