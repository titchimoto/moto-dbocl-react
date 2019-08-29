import React from 'react';
import styled from 'styled-components';

export const SearchInput = styled.input`
  background: #F5F8FA;
  height: 40px;
  min-width: 260px;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 0px 20px;
  display: inline;

  &::placeholder {
    color: #90A0B7;
  }
`

export const Date = styled.input`
  border: 1px solid #D5DDE7;
  height: 35px;
  border-radius: 5px;
  width: 100px;
  padding: 0px 5px;
  margin-right: 5px;
`

export const Input = styled.input`
  height: 35px;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  /* min-width: 400px; */
  width: ${({width}) => width || '90%'};
  padding: 0px 5px;
  margin-right: 5px;
`

export const Select = styled.select`
  height: 35px;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  /* min-width: 400px; */
  width: 100%;
`

export const Checkbox = styled.input`

`

export const FieldLabel = styled.label`
  display: block;
  font-size: 11px;
`

export const FieldContainer = styled.div`
  margin: 10px 0px;
`

// React Components
export const TextInput = ({label, ...props}) => (
  <FieldContainer>
    <FieldLabel>{label}</FieldLabel>
    <Input {...props}/>
  </FieldContainer>
)

export const DateInput = ({label, ...props}) => (
  <FieldContainer>
    <FieldLabel>{label}</FieldLabel>
    <Date {...props} />
  </FieldContainer>
)

export const SelectInput = ({label, children, ...props}) => (
  <FieldContainer>
    <FieldLabel>{label}</FieldLabel>
    <Select {...props}>
      {children}
    </Select>
  </FieldContainer>
)

export const CheckboxInput = ({label, children}) => (
  <FieldContainer>
    <FieldLabel>{label}</FieldLabel>
    <Checkbox type="checkbox">
      {children}
    </Checkbox>
  </FieldContainer>
)
