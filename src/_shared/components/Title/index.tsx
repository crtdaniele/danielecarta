import styled, { css } from 'styled-components';
import {
  token,
  theme,
  cssWeight,
  cssPadding,
  cssMargin,
} from '../../theme/styles/theme';
import { FontWeight, Margin, Padding } from '../../theme/styles/types';

const color = theme('mode', {
  light: token.ColorBlack,
  dark: token.ColorWhite,
});

type Props = Margin &
  Padding &
  FontWeight & {
    variant: 'h1' | 'h2';
    textAlign?: 'left' | 'right' | 'center';
  };

const Title = styled.h1<Props>`
  ${(props) => cssWeight(props)};
  ${(props) => cssPadding(props)};
  ${(props) => cssMargin(props)};

  color: ${color};
  font-family: ${token.FontRoboto};

  ${(props) =>
    props.variant === 'h1' &&
    css`
      font-size: ${token.SizeFont3};
    `}

  ${(props) =>
    props.variant === 'h2' &&
    css`
      font-size: ${token.SizeFont2};
    `}

  ${(props) =>
    css`
      text-align: ${props?.textAlign};
    `}
`;

Title.defaultProps = {
  weight: token.Weight500,
  padding: token.Padding0,
  margin: token.Margin0,
  marginBottom: token.Padding10,
};

export { Title };
