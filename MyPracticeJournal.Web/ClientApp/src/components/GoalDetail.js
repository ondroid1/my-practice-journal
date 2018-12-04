import React, { Component } from 'react';

export class GoalDetail extends Component {
  displayName = GoalDetail.name

  constructor(props) {
    super(props);

    const goalId = this.props.match.params.id;
    this.state = { loading: true };

    if (goalId) {
      fetch('api/Goal/' + goalId)
        .then(response => response.json())
        .then(data => {
          this.setState({ goalId: goalId, goal: data, loading: false });
        });
    } else {
      const newGoal = new {
        name: null,
        description: null
      }
      this.setState({ goal: newGoal, loading: false });
    }
  }

  static handleSubmit(event) {
    alert();
    event.preventDefault();
    const data = JSON.stringify(new FormData(event.target));
    debugger;
    if (this.state.goalId) {
      fetch('api/Goal' + this.params.id, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: data,
      });
    } else {
      fetch('api/Goal', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: data,
      });
    }
  }

  static handleBack() {
    this.props.history.push('/goals');
  }

  static renderGoalDetailForm(goal, that) {
    return (
      <form className='form' onSubmit={that.handleSubmit}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="goal_name">Name</label>
            <input
              type="text"
              className="form-control"
              defaultValue={goal.name}
              name="goal_name"
              placeholder="Goal" />
          </div>
          <div className="form-group">
            <label htmlFor="goal_description">Description</label>
            <textarea 
              type="textarea"
              className="form-control"
              defaultValue={goal.description}
              name="goal_description"
              placeholder="Description" />
          </div>
        </fieldset>

        <div className="btn-toolbar">
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" className="btn btn-secondary" onClick={that.handleBack}>Back</button>
        </div>
      </form >
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : GoalDetail.renderGoalDetailForm(this.state.goal, this);

    return (
      <div>
        <h1>Goal Details</h1>

        {contents}
      </div>
    );
  }
}
