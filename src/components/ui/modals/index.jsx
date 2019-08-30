import styled from 'styled-components';

export const ModalOverlay = styled.div`
  background: black;
  opacity: 0.1;
  position: absolute;
  height: 1000px;
  width: 100%;
  z-index: -1;
`

export const ModalContainer = styled.div`
  background: white;
  border-radius: 5px;
  min-width: ${({minWidth}) => minWidth || '600px'}
  width: ${({width}) => width || '90vw'}
  max-width: ${({maxWidth}) => maxWidth || '95vw'}
  margin: auto;
`

export const ModalClose = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  background: #F7685B;
  color: white;
  border-radius: 50%;
`

export const ModalContent = styled.div`
  background: white;
  min-height: 250px;
  padding: 20px;
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  height: 50px;
  border-bottom: 1px solid #D6D6D6;
`

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 20px;
  height: 50px;
  border-top: 1px solid #D6D6D6;
`
