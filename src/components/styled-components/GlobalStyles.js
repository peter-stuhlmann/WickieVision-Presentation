import React from 'react';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  #root > div > div > div > div > div {
    background-color: #fff;
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: left;
    line-height: 1.5

    h1 {
      text-align: center;
      font-weight: 400;
      margin-top: 0
    }

    h2 {
      text-align: center;
      font-weight: 400;
    }

    a {
      color: #57aedc;
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        color: #e83c2c
      }
    }

    img {
      max-width: 100%
    &.entry {
      max-width: 100%;
      max-height: 60vh
    }
  }
`;

export const GlobalStyles = () => {
  return <StyledGlobalStyles />;
};
