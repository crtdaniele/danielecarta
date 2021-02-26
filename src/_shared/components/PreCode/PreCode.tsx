import React from 'react';
import styled from 'styled-components';

const Pre = styled.pre`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

const Code = styled.code`
  margin-bottom: 10px;
  overflow: auto;
  width: 100%;
  padding: 15px 10px;
  background-color: #eee;
  display: block;
  font-weight: 100;
  font-size: 14px;
  border-radius: 5px;
`;

const PreCode: React.FC = ({ children }) => {
  return (
    <Pre>
      <Code>{children}</Code>
    </Pre>
  );
};

export default PreCode;
