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
