import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MyDay.css';

export class MyDay extends Component {
  displayName = MyDay.name

  constructor(props) {
    super(props);
    this.getDayName = this.getDayName.bind(this);
    this.getDayPractices = this.getDayPractices.bind(this);
    this.switchFinishedFlag = this.switchFinishedFlag.bind(this);
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

  switchFinishedFlag(practiceId) {
    alert(practiceId);
    this.props.onFinishedFlagChange(practiceId, this.props.dayIndex);
  }

  render() {

    let emptyDay = !this.props.day || !this.props.day.practices;
    
    if (emptyDay) {
        return '';
    }

    return (
        <div className="row">
            <h4>
                {this.getDayName()}
            </h4>
            <ul>
                {this.getDayPractices().map((practice) => {
                    return <li key={practice.id}>
                        <span className={practice.finished ? "check green-check" : "check grey-check"}
                          onClick={() => {this.switchFinishedFlag(practice.id)}}><FontAwesomeIcon icon="check" /></span>
                        <span className="goal goal-color">{practice.goal.name}</span>
                        <span className="practice practice-color">{practice.name}</span> 
                        <span className="minutes"><FontAwesomeIcon icon="clock" /> {practice.schedules[0].minutes} min</span>
                        <span>{ practice.tutorialUrl ? <a href={practice.tutorialUrl} target="blank"><FontAwesomeIcon icon="play" /></a> : null }</span>
                        </li>;
                })}
            </ul>
        </div>
    )
  }
}