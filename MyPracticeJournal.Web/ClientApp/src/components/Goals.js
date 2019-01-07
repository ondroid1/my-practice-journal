import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Goals.css';

export class Goals extends Component {
  displayName = Goals.name

  constructor(props) {
    super(props);
    this.editGoal = this.editGoal.bind(this);
    this.showNewGoalForm = this.showNewGoalForm.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);
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

  editGoal(goal) {
    this.props.history.push('goals/' + goal.id);
  }

  showNewGoalForm() {
    this.props.history.push('goals/0');
  }

  deleteGoal(goal) {
    if (window.confirm('Do you want to delete this goal: ' + goal.name)) {
      fetch('api/Goal/' + goal.id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(_ => {
        let refreshedGoals = this.state.goals.filter(function( g ) {
          return g.id !== goal.id;
        });
        
        this.setState({ goals: refreshedGoals, loading: false });
      })
      .catch(error => console.log(error));
    }
  }

  static renderGoalsTable(goals, that) {
    return (
      
      <table className='table'>
        <thead>
          <tr>
            <th>
              Name</th>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {goals.map(goal => 
            <tr key={goal.id}>
              <td className="goal-color">
                {goal.name}
              </td>
              <td>{goal.description}</td>
              <td className="action-column">
                <button className="icon-button" onClick={() => that.editGoal(goal)}><FontAwesomeIcon icon="edit" /></button>
                <button className="icon-button" onClick={(event) => that.deleteGoal(goal)}><FontAwesomeIcon icon="trash" /></button>
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
      : Goals.renderGoalsTable(this.state.goals, this);

    return (
      <div>
        <h1>Goals</h1>
        <button type="button" className="btn btn-primary" onClick={this.showNewGoalForm}>Add</button>
        {contents}
      </div>
    );
  }
}

