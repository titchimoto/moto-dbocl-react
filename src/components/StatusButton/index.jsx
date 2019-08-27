import React from 'react';
import {Status} from '../ui/buttons';


const StatusButton = ({children}) => (
  <Status>
    {children}
  </Status>
);

export default StatusButton;
