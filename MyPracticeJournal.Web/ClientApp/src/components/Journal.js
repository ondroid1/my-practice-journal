import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Journal extends Component {
  displayName = Journal.name

  constructor(props) {
    super(props);
    this.state = { goals: [], loading: true };

    fetch('api/Goal')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
            alert('Response.ok = false');
        }
      })
      .then(data => {
        this.setState({ goals: data, loading: false });
      })
      .catch(error => console.log(error));
  }

  static renderJournalTable(goals, that) {
    return (
      
      <table className='table'>
        <thead>
          <tr>
            <th>
              Name</th>
            <th>Description</th>
            <th className="action-column"><button type="button" class="btn btn-primary" onClick={that.showNewGoalForm}>Add</button></th>
          </tr>
        </thead>
        <tbody>
          {goals.map(goal => 
            <tr key={goal.id} onClick={() => that.editGoal(goal)}>
              <td>
                {goal.name}
              </td>
              <td>{goal.description}</td>
              <td className="action-column">
                <button className="icon-button"><FontAwesomeIcon icon="edit" /></button>
                <button className="icon-button" onClick={(event) => that.deleteGoal(event, goal.id)}><FontAwesomeIcon icon="trash" /></button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
    ? <p><em>Loading...</em></p>
    : Journal.renderJournalTable(this.state.goals, this);

    return (
        <div>
        <h1>My Week</h1>
        {contents}
        </div>
    );
  }
}