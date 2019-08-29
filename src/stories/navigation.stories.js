import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

storiesOf('Main Header & Navigation', module)
  .add('Header', () => <Header />)
  .add('Nav Bar', () => <Navigation />)
