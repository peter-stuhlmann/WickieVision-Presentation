import React from 'react';
import styled from 'styled-components';

const StyledFooterLeft = styled.div`
  position: absolute;
  bottom: 8px;
  left: 1em;
  z-index: 1000;
  color: #000;
  opacity: 0.5;

  a {
    text-decoration: none;
    color: #000;
  }
`;
export const FooterLeft = props => {
  const { url, link } = props;
  return (
    <StyledFooterLeft>
      <a href={url}>{link}</a>, 2019
    </StyledFooterLeft>
  );
};

const StyledFooterRight = styled.div`
  position: absolute;
  bottom: 8px;
  right: 1em;
  z-index: 1000;
  color: #000;
  opacity: 0.5;

  a {
    text-decoration: none;
    color: #000;
  }
`;
export const FooterRight = props => {
  const { url, link } = props;
  return (
    <StyledFooterRight>
      <a href={url}>{link}</a>
    </StyledFooterRight>
  );
};
