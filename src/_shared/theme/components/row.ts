import styled, { css } from 'styled-components';

type Props = {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  justifyContent?: 'center' | 'flex-start' | 'flex-end';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  width?: string;
  height?: string;
  collapse?: 'xs' | 'sm' | 'md' | 'lg';
};

const Row = styled.div<Props>`
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${(props) =>
    props.collapse === 'xs' &&
    css`
      @media (max-width: 767px) {
        flex-direction: column;
      }
    `}

  display: flex;
`;

Row.defaultProps = {
  direction: 'row',
};

export { Row };
