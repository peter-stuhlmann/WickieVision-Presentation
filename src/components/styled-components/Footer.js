import React from 'react';
import styled from 'styled-components';

const StyledCopyright = styled.div`
  position: absolute;
  bottom: 1em;
  right: 1em;
  color: #000;
  a {
    text-decoration: none;
    color: #000;
  }
`;
export const Copyright = props => {
  const { url, link } = props;
  return (
    <StyledCopyright>
      <a href={url}>{link}</a>, 2019
    </StyledCopyright>
  );
};
