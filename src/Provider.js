import React from 'react';
import ThemeProvider from 'mdx-deck/dist/Provider';
import { GlobalStyles } from './components/styled-components/GlobalStyles';
import { Copyright } from './components/styled-components/Footer';

const Provider = ({ children, ...rest }) => (
  <ThemeProvider {...rest}>
    {children}
    <GlobalStyles />
    <Copyright url="https://wickievision.de" link="Wickie Vision" />
  </ThemeProvider>
);

export default Provider;
