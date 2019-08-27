import React from 'react';
import {NoteContainer, FlexContainer} from '../ui/containers';
import {TextLink} from '../ui/buttons';

const NoteRow = ({content, details, link}) => (
  <NoteContainer>
    <FlexContainer className="space-between">
      <div>
        <p>{content}</p>
        <div className="small bold">{details}</div>
        <span className="small">Note on: </span>
        <TextLink>{link}</TextLink>
      </div>
      <FlexContainer className="space-between">
        <button>ICON</button>
        <button>ICON</button>
      </FlexContainer>
    </FlexContainer>
  </NoteContainer>
)

export default NoteRow;
