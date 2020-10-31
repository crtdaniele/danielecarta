import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../../homepage/components';
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
    </Router>
  );
};

export default Routes;
