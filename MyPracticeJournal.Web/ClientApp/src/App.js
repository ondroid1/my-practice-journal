import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Journal } from './components/Journal';
import { Goals } from './components/Goals';
import { GoalDetail } from './components/GoalDetail';
import { Practices } from './components/Practices';
import { PracticeDetail } from './components/PracticeDetail';
import { NotFound } from './components/NotFound';
import './App.css'

library.add(faEdit, faTrash);

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/my-week' component={Journal} />
          <Route exact path='/my-week/:id' component={Journal} />
          <Route exact path='/goals' component={Goals} />
          <Route exact path='/goals/:id' component={GoalDetail} />
          <Route exact path='/practices' component={Practices} />
          <Route exact path='/practices/:id' component={PracticeDetail} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

