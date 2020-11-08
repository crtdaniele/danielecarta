import { createGlobalStyle } from 'styled-components';
import { token, theme } from '../styles/theme';

const color = theme('mode', {
  light: token.BackgroundColorLight,
  dark: token.BackgroundColorDark,
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${color};
    padding: ${token.Padding0};
    margin: ${token.Margin0};
  }`;

export { GlobalStyle };
