import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { dataSources, getClient } from '../../libs/ocap';

import Layout from '../../components/Layout';
import Loading from '../../components/Loading';

import './style.css';

class QueryDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: dataSources[0],
      summary: null,
      message: null,
      timestamp: null,
      loading: false,
    };

    console.log(getClient(this.state.dataSource.name));
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const client = getClient(this.state.dataSource.name);

    const summary = await client.accountByAddress({
      address: this.state.dataSource.demoAddress,
    });

    this.setState({ loading: false, summary });
  }

  render() {
    const { loading, summary, dataSource } = this.state;

    return (
      <Layout>
        <h2>Query Demo</h2>
        <p className="alert">Open BROWSER CONSOLE to view methods provided by OCAPClient.</p>
        {loading && (
          <p>
            Loading account summary for {dataSource.name.toUpperCase()} account:{' '}
            {dataSource.demoAddress}
          </p>
        )}
        {loading && <Loading />}
        {loading || (
          <div>
            <p>
              Account summary for {dataSource.name.toUpperCase()} account: {dataSource.demoAddress}
            </p>
            <pre>
              <code>{JSON.stringify(summary, true, '  ')}</code>
            </pre>
          </div>
        )}
      </Layout>
    );
  }
}

export default withRouter(QueryDemo);
