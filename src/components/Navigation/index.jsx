import React from 'react';
import {NavLink} from '../ui/buttons';
import {
  NavContainer,
} from './styles'

const Navigation = () => (
  <NavContainer>
    <NavLink>Event</NavLink>
    <NavLink>Contacts</NavLink>
    <NavLink>Deal</NavLink>
    <NavLink>Rooms</NavLink>
    <NavLink>Travel</NavLink>
    <NavLink>Ground</NavLink>
  </NavContainer>
)

export default Navigation;
