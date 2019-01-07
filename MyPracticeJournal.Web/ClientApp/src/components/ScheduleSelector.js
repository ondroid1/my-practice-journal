import React, { Component } from 'react';
import './ScheduleSelector.css';

export class ScheduleSelector extends Component {
  displayName = ScheduleSelector.name

  // constructor(props) {
  //   super(props);
  //   this.updateNumberInput = this.updateNumberInput.bind(this);
  // }

  // TODO - slidery
  // updateNumberInput(fieldName, value) {
  //   if (document.getElementById(fieldName) && value) {
  //     document.getElementById(fieldName).value=value; 
  //   }
  // }

  render() {
    return (
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Minutes</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>
              <label>Monday</label>
            </td>
            <td>
              <input type="number" name="mondayMinutes" min="10" max="60" step="10" 
                defaultValue={ this.props.practice.mondayMinutes === 0 ? '' : this.props.practice.mondayMinutes } />
              {/* <input type="range" min="0" max="100" step="10" onChange={this.updateNumberInput('mondayMinutes', this.value)}  /> */}
            </td>
          </tr>

          <tr>
            <td>
              <label>Tuesday</label>
            </td>
            <td>
              <input type="number" name="tuesdayMinutes" min="10" max="60" step="10" 
                defaultValue={ this.props.practice.tuesdayMinutes === 0 ? '' : this.props.practice.tuesdayMinutes } />
            </td>
          </tr>

          <tr>
            <td>
              <label>Wednesday</label>
            </td>
            <td>
              <input type="number" name="wednesdayMinutes" min="10" max="60" step="10" 
                defaultValue={ this.props.practice.wednesdayMinutes === 0 ? '' : this.props.practice.wednesdayMinutes} />
            </td>
          </tr>

          <tr>
            <td>
              <label>Thursday</label>
            </td>
            <td>
              <input type="number" name="thursdayMinutes" min="10" max="60" step="10" 
                defaultValue={ this.props.practice.thursdayMinutes === 0 ? '' : this.props.practice.thursdayMinutes } />
            </td>
          </tr>

          <tr>
            <td>
              <label>Friday</label>
            </td>
            <td>
              <input type="number" name="fridayMinutes" min="10" max="60" step="10" 
                defaultValue={ this.props.practice.fridayMinutes === 0 ? '' : this.props.practice.fridayMinutes } />
            </td>
          </tr>

          <tr>
            <td>
              <label>Saturday</label>
            </td>
            <td>
              <input type="number" name="saturdayMinutes" min="10" max="60" step="10" 
                defaultValue={ this.props.practice.saturdayMinutes === 0 ? '' : this.props.practice.saturdayMinutes } />
            </td>
          </tr>

          <tr>
            <td>
              <label>Sunday</label>
            </td>
            <td>
              <input type="number" name="sundayMinutes" min="10" max="60" step="10" 
                defaultValue={ this.props.practice.sundayMinutes === 0 ? '' : this.props.practice.sundayMinutes } />
            </td>
          </tr>
        </tbody>

        
      </table>
      
      )
  }

}