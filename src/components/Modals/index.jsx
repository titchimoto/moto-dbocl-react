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
        <ModalContainer {...this.props}>
          <ModalClose />
          {children && children}
        </ModalContainer>
      </>
    )
  }
}

export default Modal;
