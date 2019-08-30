import React from 'react';
import {NOTES} from '../../data';
import NoteRow from './note_row';
import {SearchInput} from '../ui/inputs';
import {AddButton} from '../ui/buttons';
import {Container} from '../ui/containers';
import {Flex} from 'rebass/styled-components';

const Notes = () => (
  <Container className="padding-20">
    <h4>Notes</h4>
    <Flex justifyContent="flex-start">
      <SearchInput placeholder="Search Notes..." /><AddButton>+</AddButton>
    </Flex>
    {NOTES.map(({content, details, link}) => (
      <NoteRow
        content={content}
        details={details}
        link={link}
      />
    ))}
  </Container>
)

export default Notes;
