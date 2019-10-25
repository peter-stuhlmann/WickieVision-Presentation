import React from 'react';
import ThemeProvider from 'mdx-deck/dist/Provider';
import { GlobalStyles } from './components/styled-components/GlobalStyles';
import { FooterLeft, FooterRight } from './components/styled-components/Footer';

const Provider = ({ children, ...rest }) => (
  <ThemeProvider {...rest}>
    {children}
    <GlobalStyles />
    <FooterLeft
      url="https://wickievision.de"
      link="WickieVision | Eine Marke der GetYourWings gGmbH"
    />
    <FooterRight
      url="https://getyourwings.de/impressum-datenschutz"
      link="Impressum & Datenschutz"
    />
  </ThemeProvider>
);

export default Provider;
