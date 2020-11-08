import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../../homepage/components';
import Me from '../../me/components';
import { BaseLayout } from '../theme/layout';

const Routes = () => {
  return (
    <Router>
      <Route
        path="/"
        exact
        component={() => (
          <BaseLayout>
            <HomePage />
          </BaseLayout>
        )}
      />{' '}
      <Route
        path="/me"
        exact
        component={() => (
          <BaseLayout>
            <Me />
          </BaseLayout>
        )}
      />{' '}
    </Router>
  );
};

export default Routes;
