import React from 'react';
import { Container } from 'semantic-ui-react';
import Menu from '../Menu';

const Layout = ({ children }) => (
  <div>
    <Menu />
    <Container style={{ marginTop: '1em' }}>
      <div>{children}</div>
    </Container>
  </div>
);

export default Layout;
