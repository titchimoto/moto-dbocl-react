import React, { Component } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalClose,
} from '../ui/modals';

class Modal extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <ModalOverlay />
        <ModalClose />
        <ModalContainer {...this.props}>
          {children && children}
        </ModalContainer>
      </>
    )
  }
}

export default Modal;
