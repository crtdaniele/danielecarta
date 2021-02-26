import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './_shared/store/index';
import { Provider } from 'react-redux';
import Routes from './_shared/routes/routes';
import { GlobalStyle } from './_shared/theme/components/globalstyle';
import configureApp from './_shared/configure';
import DarkTheme from './_shared/components/DarkTheme/DarkTheme';
import ThemeProvider from './_shared/theme/ThemeProvider';

configureApp();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <GlobalStyle />
      <DarkTheme />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
