import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Practices extends Component {
  displayName = Practices.name

  constructor(props) {
    super(props);
    this.editPractice = this.editPractice.bind(this);
    this.showNewPracticeForm = this.showNewPracticeForm.bind(this);
    this.deletePractice = this.deletePractice.bind(this);
    this.state = { practices: [], loading: true };

    fetch('api/Practice')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
            alert('Response.ok = false');
        }
      })
      .then(data => {
        this.setState({ practices: data.practiceList, goals: data.goalList, loading: false });
      })
      .catch(error => console.log(error));
  }

  editPractice(practiceId) {
    this.props.history.push('practices/' + practiceId);
  }

  showNewPracticeForm() {
    this.props.history.push('practices/0');
  }

  deletePractice(event, practiceId) {

    //faevent.stopImmediatePropagation();
      if (window.confirm('Do you want to delete id ' + practiceId)) {
        fetch('api/Practice/' + practiceId, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then(data => {
          this.setState({ practices: data, loading: false });
        })
        .catch(error => console.log(error));
    }
  }

  static renderPracticesTable(practices, that) {

    return (
      
      <table className='table'>
        <thead>
          <tr>
            <th>Goal</th>
            <th>Name</th>
            <th>Description</th>
            <th>Schedule</th>
            <th>Tutorial</th>
            <th className="action-column"></th>
          </tr>
        </thead>
        <tbody>
          {practices.map(practice => 
            <tr key={practice.id}>
              <td>
                <a href={"/goals/" + practice.goal.id} className="goal-color">{practice.goal.name}</a>
              </td>
              <td className="practice-color">
                {practice.name}
              </td>
              <td>
                {practice.description}
              </td>
              <td>
                TODO
              </td>
              <td>
                { practice.tutorialUrl
                  ? <a href={practice.tutorialUrl} target="blank"><FontAwesomeIcon icon="play" /></a>
                  : null
                }
              </td>
              <td className="action-column">
                <button className="icon-button" onClick={() => that.editPractice(practice.id)}><FontAwesomeIcon icon="edit" /></button>
                <button className="icon-button" onClick={(event) => that.deletePractice(event, practice.id)}><FontAwesomeIcon icon="trash" /></button>
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
      : Practices.renderPracticesTable(this.state.practices, this);

    return (
      <div>
        <h1>Practices</h1>
        <button type="button" className="btn btn-primary" onClick={this.showNewPracticeForm}>Add</button>
        {contents}
      </div>
    );
  }
}
