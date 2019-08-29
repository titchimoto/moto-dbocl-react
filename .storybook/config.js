import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import {GlobalStyles} from '../src/App.js'
import { jsxDecorator } from 'storybook-addon-jsx';

addDecorator(jsxDecorator);

const req = require.context('../src/stories', true, /\.stories\.js$/);


function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
