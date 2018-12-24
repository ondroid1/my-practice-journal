import React, { Component } from 'react';

export class PracticeDetail extends Component {
  displayName = PracticeDetail.name

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    const goalId = this.props.match.params.id;
    this.state = { goal: null, loading: true };

    if (goalId && goalId > 0) {
      fetch('api/Goal/' + goalId)
        .then(response => response.json())
        .then(data => {
          this.setState({ goalId: goalId, goal: data, loading: false });
        });
    } else {
      const newGoal = {
        id: 0,
        name: null,
        description: null
      }
      this.state = { goalId: 0, goal: newGoal, loading: false };
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var formObject = {};
    formData.forEach(function(value, key){
      formObject[key] = value;
    });
    const data = JSON.stringify(formObject);

    if (this.state.goalId) {
      fetch('api/Goal/' + this.state.goalId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: data
      });
    } else {
      fetch('api/Goal', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: data
      })
      .then(response => {
        if (response.ok) {
          this.handleBack();
        } else {
          alert('Response.ok = false');
        }
      });
    }
  }

  handleBack() {
    this.props.history.push('/goals');
  }

  static renderGoalDetailForm(goal, that) {
    return (
      <form className='form' onSubmit={(event) => that.handleSubmit(event)}>
        <fieldset>
          <input type="hidden" id="id" name="id" value={goal.id}/>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              defaultValue={goal.name}
              name="name"
              placeholder="Goal" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              type="textarea"
              className="form-control"
              defaultValue={goal.description}
              name="description"
              placeholder="Description" />
          </div>
        </fieldset>

        <div className="btn-toolbar">
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" className="btn btn-secondary" onClick={() => that.handleBack}>Back</button>
        </div>
      </form >
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : PracticeDetail.renderGoalDetailForm(this.state.goal, this);

    return (
      <div>
        <h1>Goal Details</h1>

        {contents}
      </div>
    );
  }
}
