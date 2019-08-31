import React, { Component } from 'react';
import {ChevronIcon, FileIcon} from '../ui/icons';
import {TextLink} from '../ui/buttons';
import {TextInput} from '../ui/inputs';
import {Flex, Box} from 'rebass/styled-components';
import {
  SidebarContainer,
  FileDropContainer,
  NoteContainer,
} from './styles';
import {FILES, NOTES} from '../../data';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFiles: true,
    }
  }

  handleShowFiles = () => this.setState(({showFiles}) => ({showFiles: !showFiles}))

  render() {
    const {showFiles} = this.state;
    return (
      <SidebarContainer>
        {/* File Attachments */}
        <Box py={2} onClick={this.handleShowFiles}>
          <h4>Attached Files <ChevronIcon /></h4>
        </Box>
        {showFiles && (
          <Box>
          {FILES.map(({name}) => (
            <Box>
              <FileIcon height="15px" width="15px"/><TextLink>{name}</TextLink>
            </Box>
          ))}
          <Flex py={2} justifyContent="center">
            <FileDropContainer>
              <FileIcon /><TextLink>Upload File...</TextLink>
            </FileDropContainer>
          </Flex>
          </Box>
        )}

        {/* Notes/Chat Section */}
        <Box py={3}>
          <h4>Notes</h4>
            {NOTES.map(({content, details}) => (
              <Box py={2}>
              <NoteContainer>
                <p>{content}</p>
              </NoteContainer>
                <Flex justifyContent="flex-end">
                  <p className="small">{details}</p>
                </Flex>
              </Box>
            ))}
            {NOTES.map(({content, details}) => (
              <Box py={2}>
              <NoteContainer>
                <p>{content}</p>
              </NoteContainer>
                <Flex justifyContent="flex-end">
                  <p className="small">{details}</p>
                </Flex>
              </Box>
            ))}
        </Box>
        <Flex alignItems="center">
          <Box width={10/12}>
            <TextInput placeholder="Enter note..."/>
          </Box>
          <Box width={2/12}>
            <FileIcon />
          </Box>
        </Flex>
      </SidebarContainer>
    )
  }
}

export default Sidebar;
