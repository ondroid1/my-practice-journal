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

  deleteGoal(event, goalId) {

    //faevent.stopImmediatePropagation();
      if (window.confirm('Do you want to delete id ' + goalId)) {
          debugger;
        fetch('api/Goal/' + goalId, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then(data => {
          this.setState({ goals: data, loading: false });
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
            <th className="action-column"><button type="button" className="btn btn-primary" onClick={that.showNewGoalForm}>Add</button></th>
          </tr>
        </thead>
        <tbody>
          {goals.map(goal => 
            <tr key={goal.id} onClick={() => that.editGoal(goal)}>
              <td className="goal-color">
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
      : Goals.renderGoalsTable(this.state.goals, this);

    return (
      <div>
        <h1>Goals</h1>
        {contents}
      </div>
    );
  }
}

