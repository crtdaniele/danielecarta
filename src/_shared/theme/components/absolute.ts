import styled from 'styled-components';

type Props = {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
};

const Absolute = styled.div<Props>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`;

export { Absolute };
