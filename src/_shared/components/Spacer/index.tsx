import styled, { css } from 'styled-components';
import { Height } from '../../theme/styles/types';

type Props = Height;

const Spacer = styled.div<Props>`
  ${(props) =>
    css`
      height: ${props.height};
    `}
`;

export { Spacer };
