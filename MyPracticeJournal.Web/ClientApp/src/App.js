import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { Goals } from './components/Goals';
import { GoalDetail } from './components/GoalDetail';
import { NotFound } from './components/NotFound';

library.add(faEdit, faTrash);

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/goals' component={Goals} />
          <Route exact path='/goals/:id' component={GoalDetail} />
          <Route exact path='/counter' component={Counter} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

