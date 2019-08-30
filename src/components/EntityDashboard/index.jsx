import React, { Component } from 'react';
import Notes from '../Notes';
import RelatedPeople from '../RelatedPeople';
import EntityContact from '../EntityContact';
import EntitySchedule from '../EntitySchedule'
import {MainContent, ContentSection, Divider} from '../ui/containers';
import {Box} from 'rebass/styled-components';

class EntityDashboard extends Component {
  render() {
    return (
      <MainContent>
        <Box width="30%">
          <ContentSection>
            <EntityContact />
            <Divider />
            <RelatedPeople />
            <Notes />
          </ContentSection>
        </Box>
        <Box width="70%">
          <ContentSection>
            <EntitySchedule />
          </ContentSection>
        </Box>
      </MainContent>
    )
  }
}

export default EntityDashboard;
