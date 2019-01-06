import React, { Component } from 'react';
import {ScheduleSelector} from './ScheduleSelector';
import './PracticeDetail.css';

export class PracticeDetail extends Component {
  displayName = PracticeDetail.name

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getYoutubeImage = this.getYoutubeImage.bind(this);

    const practiceId = this.props.match.params.id;
    this.state = { practice: null, loading: true };

    if (practiceId && practiceId > 0) {
      fetch('api/Practice/' + practiceId)
        .then(response => response.json())
        .then(data => {
          this.setState({ practiceId: practiceId, practice: data, loading: false });
        });
    } else {
      fetch('api/Goal')
      .then(response => response.json())
      .then(data => {
        const newPractice = {
          id: 0,
          name: null,
          description: null,
          allGoals: data
        }
        this.setState({ practiceId: 0, practice: newPractice, loading: false });
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var formObject = {};
    formData.forEach(function(value, key){
      if (key.indexOf("Minutes") > -1 && value === '') {
        value = 0;
      }
      formObject[key] = value;
    });

    const data = JSON.stringify(formObject);

    if (this.state.practiceId) {
      fetch('api/Practice/' + this.state.practiceId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: data
      });
    } else {
      fetch('api/Practice', {
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
    this.props.history.push('/practices');
  }

  getYoutubeImage(videoUrl) {
    debugger;
    if (videoUrl) {
      var videoId = videoUrl.split('v=')[1];
      var ampersandPosition = videoId.indexOf('&');
      if(ampersandPosition != -1) {
        var videoId = videoId.substring(0, ampersandPosition);
      } 

      return `http://img.youtube.com/vi/${videoId}/0.jpg` ;
    }

    return null;
  }

  static renderPracticeDetailForm(practice, that) {
    return (
      <form className='form' onSubmit={(event) => that.handleSubmit(event)}>
        <fieldset>
          <input type="hidden" id="id" name="id" value={practice.id}/>

          <div className="form-group">
            <label htmlFor="name">Goal</label>
            <select className="form-control" name="goalId" value={practice.goalId}>
              <option value=''>Select a goal</option>
              {practice.allGoals.map((goal) => <option value={goal.id}>{goal.name}</option>)}
            </select>
          </div>

          {/* <button type="button" className="btn">{practice.goal.name}</button> */}

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              defaultValue={practice.name}
              name="name"
              placeholder="Name" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              type="textarea"
              className="form-control"
              defaultValue={practice.description}
              name="description"
              placeholder="Description" />
          </div>

          <div className="form-group">
            <label htmlFor="tutorialUrl">Tutorial Link</label>
            <input
              type="text"
              className="form-control"
              defaultValue={practice.tutorialUrl}
              name="tutorialUrl"
              placeholder="TutorialUrl" />
          </div>

          <a href={practice.tutorialUrl} target="blank"><img className="tutorial-image" src={that.getYoutubeImage(practice.tutorialUrl)} /></a>
          
          <ScheduleSelector practice={practice} />
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
      : PracticeDetail.renderPracticeDetailForm(this.state.practice, this);

    return (
      <div>
        <h1>Practice Details</h1>

        {contents}
      </div>
    );
  }
}
