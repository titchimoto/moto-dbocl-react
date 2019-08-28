import React, { Component } from 'react';
import {SCHEDULES} from '../../data';
import ScheduleFilter from './schedule_filter';
import ScheduleRow from './schedule_row';
import DateRow from './date_row';
import {Container} from '../ui/containers';

class EntitySchedule extends Component {
  render() {
    return (
      <Container className="padding-20">
        <ScheduleFilter />
        <DateRow date="Thursday 6 July 2019" />
        {SCHEDULES.map(({time, subtime, name, subname, guests}) => (
          <ScheduleRow
            key={name}
            time={time}
            subtime={subtime}
            name={name}
            subname={subname}
            guests={guests}
          />
        ))}

        <DateRow date="Friday 7 July 2019" />
        {SCHEDULES.map(({time, subtime, name, subname, guests}) => (
          <ScheduleRow
            key={name}
            time={time}
            subtime={subtime}
            name={name}
            subname={subname}
            guests={guests}
          />
        ))}

        <DateRow date="Saturday 8 July 2019" />
        {SCHEDULES.map(({time, subtime, name, subname, guests}) => (
          <ScheduleRow
            key={name}
            time={time}
            subtime={subtime}
            name={name}
            subname={subname}
            guests={guests}
          />
        ))}

      </Container>
    )
  }
}

export default EntitySchedule;
