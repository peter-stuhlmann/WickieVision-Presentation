import React from 'react';
import styled from 'styled-components';

const StyledAlignCenter = styled.div`
  text-align: center;
  font-size: ${props => props.fontSize || '1em'};
`;
export const AlignCenter = props => {
  const { children, fontSize } = props;
  return <StyledAlignCenter fontSize={fontSize}>{children}</StyledAlignCenter>;
};

const StyledFootNote = styled.div`
  font-size: 0.8em;
  font-style: italic;
`;
export const FootNote = props => {
  const { children } = props;
  return <StyledFootNote>{children}</StyledFootNote>;
};
