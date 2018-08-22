/* eslint react/jsx-no-target-blank:"off" */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Layout from '../../components/Layout';

import './style.css';

class Home extends Component {
  render() {
    return (
      <Layout>
        <h2>OCAP React Starter</h2>
        <div className="app-content">
          <p>
            This is a starter project with{' '}
            <a
              href="https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js"
              target="_blank"
            >
              @arcblock/ocap-js
            </a>{' '}
            integrated for React Developers. It's bootstrapped by
            <a
              href="https://github.com/facebook/create-react-app"
              target="_blank"
              rel="noopener"
            >
              create-react-app
            </a>.
          </p>
          <div className="link-sections">
            <div className="link-section">
              <h3>SDK Usage Demos</h3>
              <ul>
                <li>
                  <Link to="/query" rel="noopener">
                    Query Demo
                  </Link>
                </li>
                <li>
                  <Link to="/subscription" rel="noopener">
                    Subscription Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div className="link-section">
              <h3>SDK Documentation</h3>
              <ul>
                <li>
                  <a
                    href="https://github.com/ArcBlock/ocap-javascript-sdk/tree/master/packages/ocap-js"
                    target="_blank"
                    rel="noopener"
                  >
                    SDK Homepage
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/spec.md"
                    target="_blank"
                    rel="noopener"
                  >
                    SDK API Specification
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/btc.md"
                    target="_blank"
                    rel="noopener"
                  >
                    Bitcoin API and Response Formats
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ArcBlock/ocap-javascript-sdk/blob/master/packages/ocap-js/docs/eth.md"
                    target="_blank"
                    rel="noopener"
                  >
                    Ethereum API and Response Formats
                  </a>
                </li>
              </ul>
            </div>
            <div className="link-section">
              <h3>React Libraries Integrated</h3>
              <ul>
                <li>
                  <a
                    href="https://github.com/ReactTraining/react-router"
                    target="_blank"
                  >
                    react-router
                  </a>
                </li>
                <li>
                  <a href="https://react.semantic-ui.com/" target="_blank">
                    semantic-ui-react
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Semantic-Org/Semantic-UI-CSS"
                    target="_blank"
                  >
                    semantic-ui-css
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Home);
