import React, { Component } from 'react';
import './ScheduleSelector.css';

export class ScheduleSelector extends Component {
  displayName = ScheduleSelector.name

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="schedule-table">
        <tr>
          <th>Day</th>
          <th>Minutes</th>
        </tr>

        <tr>
          <td>
            <label className="checkbox-label">Monday
              <input type="checkbox" name="cb-monday" checked="checked"  /> 
              <span className="checkmark"></span>
            </label>
          </td>
          <td>
            <input type="number" name="minutes-monday" min="10" max="60" step="10" />
          </td>
        </tr>

        <tr>
          <td>
            <label className="checkbox-label">Tuesday
              <input type="checkbox" name="cb-tuesday" checked="checked"  /> 
              <span className="checkmark"></span>
            </label>
          </td>
          <td>
            <input type="number" name="minutes-monday" min="10" max="60" step="10" />
          </td>
        </tr>

        <tr>
          <td>
            <label className="checkbox-label">Wednesday
              <input type="checkbox" name="cb-wednesday" /> 
              <span className="checkmark"></span>
            </label>
          </td>
          <td>
            <input type="number" name="minutes-monday" min="10" max="60" step="10" />
          </td>
        </tr>

        <tr>
          <td>
            <label className="checkbox-label">Thursday
              <input type="checkbox" name="cb-thursday" /> 
              <span className="checkmark"></span>
            </label>
          </td>
          <td>
            <input type="number" name="minutes-monday" min="10" max="60" step="10" />
          </td>
        </tr>

        <tr>
          <td>
            <label className="checkbox-label">Friday
              <input type="checkbox" name="cb-friday" /> 
              <span className="checkmark"></span>
            </label>
          </td>
          <td>
            <input type="number" name="minutes-monday" min="10" max="60" step="10" />
          </td>
        </tr>

        <tr>
          <td>
            <label className="checkbox-label">Saturday
              <input type="checkbox" name="cb-saturday" checked="checked"  /> 
              <span className="checkmark"></span>
            </label>
          </td>
          <td>
            <input type="number" name="minutes-monday" min="10" max="60" step="10" />
          </td>
        </tr>

        <tr>
          <td>
            <label className="checkbox-label">Sunday
              <input type="checkbox" name="cb-sunday" checked="checked"  /> 
              <span className="checkmark"></span>
            </label>
          </td>
          <td>
            <input type="number" name="minutes-monday" min="10" max="60" step="10" />
          </td>
        </tr>
      </table>
      
      )
  }

}