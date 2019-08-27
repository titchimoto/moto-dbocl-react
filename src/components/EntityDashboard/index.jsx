import React, { Component } from 'react';
import Notes from '../Notes';
import RelatedPeople from '../RelatedPeople';
import EntityContact from '../EntityContact';
import EntitySchedule from '../EntitySchedule'
import {MainContent, ContentSection, Divider} from '../ui/containers';
import {

} from './styles'

class EntityDashboard extends Component {
  render() {
    return (
      <MainContent>
        <ContentSection className="left-content">
          <EntityContact />
          <Divider />
          <RelatedPeople />
          <Divider />
          <Notes />
        </ContentSection>
        <ContentSection className="right-content">
          <EntitySchedule />
        </ContentSection>
      </MainContent>
    )
  }
}

export default EntityDashboard;
