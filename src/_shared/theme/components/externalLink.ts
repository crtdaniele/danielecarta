import styled from 'styled-components';
import {
  token,
  theme,
  cssWeight,
  cssPadding,
  cssMargin,
  cssFontSzie,
} from '../styles/theme';
import { FontSize, FontWeight, Margin, Padding } from '../styles/types';

type Props = Margin &
  Padding &
  FontSize &
  FontWeight & {
    display?: 'block' | 'none' | 'inline-block';
  };

const color = theme('mode', {
  light: token.ColorBlue,
  dark: token.ColorRed,
});

const ExternalLink = styled.a<Props>`
  ${(props) => cssWeight(props)};
  ${(props) => cssPadding(props)};
  ${(props) => cssMargin(props)};
  ${(props) => cssFontSzie(props)};

  text-decoration: none;
  display: ${(props) => props.display};
  color: ${color};
  font-family: ${token.FontRoboto};
`;

ExternalLink.defaultProps = {
  display: 'block',
  marginBottom: token.Margin5,
};

export { ExternalLink };
