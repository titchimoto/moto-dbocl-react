import React from 'react';
import {NOTES} from '../../data';
import NoteRow from './note_row';
import {SearchInput} from '../ui/inputs';
import {AddButton} from '../ui/buttons';
import {Container, FlexContainer} from '../ui/containers';

const Notes = () => (
  <Container className="padding-20">
    <h4>Notes</h4>
    <FlexContainer className="flex-start">
      <SearchInput placeholder="Search Notes..." /><AddButton>+</AddButton>
    </FlexContainer>
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
