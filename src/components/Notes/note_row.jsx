import React from 'react';
import {NoteContainer} from '../ui/containers';
import {TextLink} from '../ui/buttons';
import {TrashIcon, PencilIcon} from '../ui/icons';
import {Flex} from 'rebass/styled-components';

const NoteRow = ({content, details, link}) => (
  <NoteContainer>
    <Flex justifyContent="space-between">
      <div>
        <p>{content}</p>
        <div className="small bold">{details}</div>
        <span className="small">Note on: </span>
        <TextLink>{link}</TextLink>
      </div>
      <Flex alignItems="center" justifyContent="flex-end">
        <PencilIcon />
        <TrashIcon />
      </Flex>
    </Flex>
  </NoteContainer>
)

export default NoteRow;
