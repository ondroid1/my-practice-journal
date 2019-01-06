import React, { Component } from 'react';
import './ScheduleSelector.css';

export class MyWeek extends Component {
  displayName = MyWeek.name

  constructor(props) {
    super(props);
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

  render() {
    return (
      <div>
        <h1>My Week</h1>
        {/* <h2>Week {this.state.myWeek.dateFrom.toLocaleDateString()} - {this.state.myWeek.dateFrom.toLocaleDateString()}</h2> */}

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
              </td>
            </tr>

            <tr>
              <td>
                <label>Tuesday</label>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td>
                <label>Wednesday</label>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td>
                <label>Thursday</label>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td>
                <label>Friday</label>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td>
                <label>Saturday</label>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td>
                <label>Sunday</label>
              </td>
              <td>
              </td>
            </tr>
          </tbody>

          
        </table>

      </div>
      )
  }

}