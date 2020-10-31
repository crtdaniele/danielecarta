import styled from 'styled-components';

type Props = {
  size?: number;
  alignSelf?: 'baseline' | 'center' | 'flex-start' | 'flex-end';
  width?: string;
  height?: string;
};

const Col = styled.div<Props>`
  flex: ${(props) => props.size};
  align-self: ${(props) => props.alignSelf};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export { Col };
