import React, { Component } from 'react';
import { Status } from '../ui/buttons';
import { Flex } from 'rebass/styled-components'
import { STATUSES } from '../../data'

class StatusButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openMenu: false,
      activeStatus: props.children.toLowerCase(),
    }
  }

  handleShowMenu = () => this.setState(({openMenu}) => ({openMenu: !openMenu}))

  handleChangeStatus = ({target: { value }}) => this.setState({activeStatus: value, openMenu: false})

  render() {
    const { children } = this.props
    const { openMenu, activeStatus } = this.state
    return (
      <div style={{position: 'relative'}} >
        <Status className={activeStatus} onClick={this.handleShowMenu}>
          {activeStatus || children}
        </Status>
        {openMenu && (
          <Flex style={{position: 'absolute'}} alignItems="center" justifyContent="center" flexDirection="column">
          {STATUSES
            .filter((status) => status !== activeStatus)
            .map((status) => (
            <Status
              className={status}
              invert
              value={status}
              onClick={this.handleChangeStatus}
            >
              {status}
            </Status>
          ))}
          </Flex>
        )}
      </div>
    )
  }
}

export default StatusButton;
