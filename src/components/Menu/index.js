import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react';

import logo from './logo.png';

const MenuComponent = () => (
  <Menu inverted>
    <Container>
      <Menu.Item as="a" header>
        <Image size="mini" src={logo} style={{ marginRight: '1.5em' }} />
        OCAP React Starter
      </Menu.Item>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/query">Query Demo</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/subscription">Subscription Demo</Link>
      </Menu.Item>
    </Container>
  </Menu>
);

export default MenuComponent;
