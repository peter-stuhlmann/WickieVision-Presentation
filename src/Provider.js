import React from 'react';
import ThemeProvider from 'mdx-deck/dist/Provider';
import { Copyright } from './components/styled-components/Footer';

const Provider = ({ children, ...rest }) => (
  <ThemeProvider {...rest}>
    {children}
    <Copyright url="https://wickievision.de" link="Wickie Vision" />
  </ThemeProvider>
);

export default Provider;
