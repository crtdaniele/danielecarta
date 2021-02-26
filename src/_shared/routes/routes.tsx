import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../../homepage/index';
import SnippetJs from '../../snippetJs';
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
      />
      <Route
        path="/snippets-javascript"
        exact
        component={() => (
          <BaseLayout>
            <SnippetJs />
          </BaseLayout>
        )}
      />
    </Router>
  );
};

export default Routes;
