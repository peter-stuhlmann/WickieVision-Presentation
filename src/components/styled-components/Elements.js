import React from 'react';
import styled from 'styled-components';

const StyledFootNote = styled.div`
  font-size: 0.8em;
  font-style: italic;
`;
export const FootNote = props => {
  const { children } = props;
  return <StyledFootNote>{children}</StyledFootNote>;
};
