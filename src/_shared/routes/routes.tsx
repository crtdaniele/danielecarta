import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../../homepage/index';
import JavascriptSnippets from '../../javascript/snippets';
import { BaseLayout } from '../theme/layout';
import { RoutesNavigation } from './costants';

const Routes = () => {
  return (
    <Router>
      <Route
        path={RoutesNavigation.HOME}
        exact
        component={() => (
          <BaseLayout>
            <HomePage />
          </BaseLayout>
        )}
      />
      <Route
        path={RoutesNavigation.JAVASCRIPT_SNIPPETS}
        exact
        component={() => (
          <BaseLayout>
            <JavascriptSnippets />
          </BaseLayout>
        )}
      />
    </Router>
  );
};

export default Routes;
