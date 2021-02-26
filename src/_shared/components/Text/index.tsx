import styled, { css } from 'styled-components';
import {
  token,
  theme,
  cssWeight,
  cssPadding,
  cssMargin,
  cssFontSzie,
} from '../../theme/styles/theme';
import {
  FontSize,
  FontWeight,
  Margin,
  Padding,
  Align,
} from '../../theme/styles/types';

const color = theme('mode', {
  light: token.ColorBlack,
  dark: token.ColorWhite,
});

type Props = Margin & Padding & FontSize & FontWeight & Align;

const Text = styled.p<Props>`
  ${(props) => cssWeight(props)};
  ${(props) => cssPadding(props)};
  ${(props) => cssMargin(props)};
  ${(props) => cssFontSzie(props)};

  color: ${color};
  font-family: ${token.FontRoboto};

  ${(props) => css`
    text-align: ${props.textAlign};
  `};
`;

Text.defaultProps = {
  weight: token.Weight400,
  padding: token.Padding0,
  margin: token.Margin0,
  marginBottom: token.Padding10,
  fontSize: token.SizeFont1,
};

export { Text };
