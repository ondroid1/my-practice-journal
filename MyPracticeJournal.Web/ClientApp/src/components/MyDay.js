import React, { Component } from 'react';
import './ScheduleSelector.css';

export class MyDay extends Component {
  displayName = MyDay.name

  constructor(props) {
    super(props);
    this.getDayName = this.getDayName.bind(this);
    this.getDayPractices = this.getDayPractices.bind(this);
  }

  weekday = new Array( "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" );

  getDayName() {
    return this.weekday[this.props.dayIndex]  
  }

  getDayPractices() {
    if (!this.props.day) {
        return [];
    }
    return this.props.day.practices;
  }

  render() {
    return (
        <div className="row">
            <h3>
                {this.getDayName()}
            </h3>
            <ul>
                {this.getDayPractices().map((practice) => {
                    return <li key={practice.id}>{practice.goal.name} - {practice.name} - {practice.schedules[0].minutes} minutes</li>;
                })}
            </ul>
        </div>
    )
  }
}