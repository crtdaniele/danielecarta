import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './_shared/store/index';
import { Provider } from 'react-redux';
import Routes from './_shared/routes/routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './_shared/theme/components/globalstyle';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={{ mode: 'dark' }}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
