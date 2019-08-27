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
`

export const TextLink = styled.a`
  color: ${({color}) => color ? color : '#109CF1'};
  font-size: 10px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`

export const NavLink = styled.button`
  font-size: 16px;
  border: 0;
  font-weight: 600;
  margin: 10px 20px;
`
