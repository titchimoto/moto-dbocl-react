import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import {
  ModalOverlay,
  ModalContainer,
  ModalClose,
} from '../ui/modals';
import { PopOutContainer } from '../ui/containers';

class Modal extends Component {
  render() {
    const { children, showSidebar } = this.props;
    return (
      <>
        <ModalOverlay />
        <ModalContainer {...this.props}>
          {showSidebar && (
            <PopOutContainer right="50px" top="10px">
              <Sidebar />
            </PopOutContainer>
          )}
          <ModalClose>X</ModalClose>
          {children && children}
        </ModalContainer>
      </>
    )
  }
}

export default Modal;
