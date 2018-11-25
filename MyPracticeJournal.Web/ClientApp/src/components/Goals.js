import React, { Component } from 'react';

export class Goals extends Component {
  displayName = Goals.name

  constructor(props) {
    super(props);
    this.state = { goals: [], loading: true };

    fetch('api/Goal')
      .then(response => response.json())
      .then(data => {
        this.setState({ goals: data, loading: false });
      });
  }

  static renderGoalsTable(goals) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Název</th>
            <th>Popis</th>
          </tr>
        </thead>
        <tbody>
          {goals.map(goal =>
            <tr key={goal.id}>
              <td>{goal.goal}</td>
              <td>{goal.description}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Goals.renderGoalsTable(this.state.goals);

    return (
      <div>
        <h1>Goals</h1>
        <p>Pøehled aktivit / cílù</p>
        {contents}
      </div>
    );
  }
}
