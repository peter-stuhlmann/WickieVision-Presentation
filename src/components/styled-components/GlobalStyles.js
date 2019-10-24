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
  }
`;

export const GlobalStyles = () => {
  return <StyledGlobalStyles />;
};
