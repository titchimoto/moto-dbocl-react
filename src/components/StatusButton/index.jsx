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

  componentDidMount() {
    document.addEventListener('mousedown', this.handleShowMenu, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleShowMenu, false)
  }

  handleShowMenu = (e) => {
    if (this.node.contains(e.target)) {
      return this.setState(({openMenu}) => ({openMenu: true}))
    }
    this.handleClickOutside()
  }

  handleClickOutside = () => this.setState({openMenu: false})

  handleChangeStatus = ({target: { value }}) => this.setState({activeStatus: value, openMenu: false})

  render() {
    const { children } = this.props
    const { openMenu, activeStatus } = this.state
    return (
      <div ref={node => this.node = node} style={{position: 'relative'}} >
        <Status className={activeStatus}>
          {activeStatus || children}
        </Status>
        {openMenu && (
          <Flex style={{position: 'absolute'}} alignItems="center" justifyContent="center" flexDirection="column">
          {STATUSES
            .filter((status) => status !== activeStatus)
            .map((status) => (
            <Status
              className={`${status} invert`}
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
