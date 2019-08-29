import React from 'react';
import styled from 'styled-components';

export const Status = styled.button`
  display: inline-block;
  min-width: 70px;
  min-height: 20px;
  border-radius: 4px;
  border: 0;
  background: #109CF1;
  font-size: 10px;
  color: white;
  text-align: center;
  margin: 0px 5px;
`

export const AddButton = styled.button`
  background: #2ED47A;
  margin: 0px 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  font-size: 1.25em;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`

export const TextLink = styled.a`
  color: ${({color}) => color ? color : '#109CF1'};
  font-size: 11px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export const NavLink = styled.button`
  font-size: 16px;
  border: 0;
  font-weight: 600;
  margin: 10px 20px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`

export const PrimaryButton = styled.button`
  min-height: 30px;
  max-height: 30px;
  min-width: 100px
  color: ${({invert}) => invert ?  '#2ED47A' : 'white'};
  background: ${({invert}) => invert ? 'white': '#2ED47A'};
  border: ${({invert}) => invert ? '1px solid #2ED47A' : ''};
  border-radius: 5px;
  font-weight: 600;
  margin: 0px 5px;
  padding: 0px 10px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export const PrimaryButtonHollow = styled.button`
  min-height: 30px;
  min-width: 100px
  color: ${({color}) => color || '#2ED47A'};
  border: ${({border}) => border || '1px solid #2ED47A'};
  background: white;
  border-radius: 5px;
  font-weight: 600;
  margin: 0px 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export const SecondaryButton = styled.button`
  min-height: 30px;
  min-width: 100px;
  color: ${({color}) => color || '#109CF1'};
  background: white;
  border-radius: 5px;
  border: ${({border}) => border || '1px solid #109CF1'};
  margin: 0px 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export const LabelButton = styled.button`
  height: 20px;
  width: 35px;
  color: ${({color}) => color || '#2ED47A'};
  border: ${({border}) => border || '1px solid #2ED47A'};
  background: white;
  border-radius: 5px;
  margin: 0px 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export const SaveButton = ({color, children}) => (
  <PrimaryButton color={color}>
    {children && children} SAVE
  </PrimaryButton>
)

export const CancelButton = ({color, children}) => (
  <SecondaryButton color={color}>
    {children && children} CANCEL
  </SecondaryButton>
)
