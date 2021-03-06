﻿import React, { Component } from 'react';
import './ScheduleSelector.css';
import { WeekSelector } from './WeekSelector';
import { MyDay } from './MyDay';

export class MyWeek extends Component {
  displayName = MyWeek.name

  constructor(props) {
    super(props);
    this.onWeekChange = this.onWeekChange.bind(this);
    this.getDay = this.getDay.bind(this);
    this.switchFinishedFlag = this.switchFinishedFlag.bind(this);
    
    this.state = { myWeek: {}, loading: true };

    fetch('api/MyWeek')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
            alert('Response.ok = false');
        }
      })
      .then(data => {
        this.setState({ myWeek: data, loading: false });
      })
      .catch(error => console.log(error));
  }

  getDay(dayIndex) {

    if (!this.state.myWeek.days) {
      return { practices: [] };
    }

    var day = this.state.myWeek.days.find(d => {
      return d.dayOfWeek === dayIndex;
    });

    return day;
  }

  onWeekChange(weekMovement) {

    if (!this.state.myWeek) {
      return;
    }

    var dateFrom;

    switch(weekMovement) {
      case 1: // next week
        dateFrom = new Date(this.state.myWeek.dateFrom)
        dateFrom.setDate(dateFrom.getDate() + 7);
        break;
      case -1: // previous week
        dateFrom = new Date(this.state.myWeek.dateFrom)
        dateFrom.setDate(dateFrom.getDate() + -7);
        break;
      default: // current week
        dateFrom = new Date();
    }

    this.setState({ loading: true });

    fetch('api/MyWeek?dateFrom=' + dateFrom.toISOString())
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
            alert('Response.ok = false');
        }
      })
      .then(data => {
        this.setState({ myWeek: data, loading: false });
      })
      .catch(error => console.log(error));
  }

  switchFinishedFlag(practiceId, dayIndex) {

    let data = { 
      practiceId: practiceId, 
      weekFromDate: this.state.myWeek.dateFrom,
      dayOfWeek: dayIndex }

    fetch('api/MyWeek', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
          alert('Response.ok = false');
      }
    })
    .then(data => {
      this.setState({ myWeek: data });
    });
  }

  render() {
    return (
      <div>
        <h1>My Week</h1>
        
        <WeekSelector 
          dateFrom={new Date(this.state.myWeek.dateFrom)} 
          dateTo={new Date(this.state.myWeek.dateTo)} 
          onWeekChange={this.onWeekChange}/>

        <hr />
        <MyDay dayIndex={1} day={this.getDay(1)} onFinishedFlagChange={this.switchFinishedFlag} />
        <MyDay dayIndex={2} day={this.getDay(2)} onFinishedFlagChange={this.switchFinishedFlag} />
        <MyDay dayIndex={3} day={this.getDay(3)} onFinishedFlagChange={this.switchFinishedFlag} />
        <MyDay dayIndex={4} day={this.getDay(4)} onFinishedFlagChange={this.switchFinishedFlag} />
        <MyDay dayIndex={5} day={this.getDay(5)} onFinishedFlagChange={this.switchFinishedFlag} />
        <MyDay dayIndex={6} day={this.getDay(6)} onFinishedFlagChange={this.switchFinishedFlag} />
        <MyDay dayIndex={0} day={this.getDay(7)} onFinishedFlagChange={this.switchFinishedFlag} />
      </div>
      )
  }

}