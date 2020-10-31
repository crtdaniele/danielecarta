import styled, { css } from 'styled-components';

type Props = {
  fullWidth: boolean;
};

const Img = styled.img<Props>`
  ${(props) =>
    props.fullWidth &&
    css`
      max-width: 100%;
      width: 100%;
    `}
`;

export { Img };
