import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Goals.css';

export class Goals extends Component {
  displayName = Goals.name

  constructor(props) {
    super(props);
    this.editGoal = this.editGoal.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);
    this.state = { goals: [], loading: true };

    fetch('api/Goal')
      .then(response => response.json())
      .then(data => {
        this.setState({ goals: data, loading: false });
      });
  }

  editGoal(goal) {
    this.props.history.push('goals/' + goal.id);
  }

  showNewGoalForm() {
    alert('New goal');
  }

  deleteGoal(goalId) {
    alert(goalId);
    //confirm('Do you want to delete id' + goalId);
  }

  static renderGoalsTable(goals, that) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th className="action-column"></th>
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
                <button className="icon-button" onClick={() => that.deleteGoal(goal.id)}><FontAwesomeIcon icon="edit" /></button>
                <button className="icon-button"><FontAwesomeIcon icon="trash" /></button>
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
        <button type="button" class="btn btn-primary" onClick={this.showNewGoalForm}>Add</button>
        {contents}
      </div>
    );
  }
}
