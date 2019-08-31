import React from 'react';
import {Flex, Box} from 'rebass/styled-components';
import {ChatIcon, FileIcon} from '../ui/icons';

const NotesAndFilesIcons = ({showSidebar}) => (
  <Flex px={3}>
    <Box onClick={showSidebar}>
      <FileIcon />
    </Box>
    <Box onClick={showSidebar}>
      <ChatIcon />
    </Box>
  </Flex>
)

export default NotesAndFilesIcons;
