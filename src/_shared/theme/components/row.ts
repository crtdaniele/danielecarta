import styled from 'styled-components';

type Props = {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  justifyContent?: 'center' | 'flex-start' | 'flex-end';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  width?: string;
  height?: string;
};

const Row = styled.div<Props>`
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
`;

Row.defaultProps = {
  direction: 'row',
};

export { Row };
