import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { dataSources, getClient } from '../../libs/ocap';

import Layout from '../../components/Layout';
import Loading from '../../components/Loading';

import './style.css';

class SubscriptionDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: dataSources[1],
      message: null,
      timestamp: null,
      subscribed: false,
    };

    console.log(getClient(this.state.dataSource.name));
  }

  async componentDidMount() {
    const client = getClient(this.state.dataSource.name);

    // Subscription
    const subscription = await client.newBlockMined();
    subscription.on('data', data => {
      this.setState({
        message: data,
        timestamp: new Date(),
      });

      setTimeout(() => {
        this.setState({ message: null });
      }, 5000);
    });

    this.setState({ subscribed: true });
  }

  render() {
    const { subscribed, message, timestamp, dataSource } = this.state;

    return (
      <Layout>
        <h2>
          Subscription Demo: {dataSource.name.toUpperCase()}.newBlockMined
        </h2>

        <p className="alert">
          Open BROWSER CONSOLE to view methods provided by OCAPClient.
        </p>

        {subscribed || (
          <p>
            Try to subscribe to {dataSource.name.toUpperCase()}.newBlockMined
          </p>
        )}
        {subscribed && (
          <p>
            {dataSource.name.toUpperCase()}.newBlockMined subscription success
          </p>
        )}

        {subscribed &&
        !message && (
          <div>
            <p>waiting for data</p>
            <Loading />
          </div>
        )}

        {message && (
          <div>
            <p>
              New {dataSource.name.toUpperCase()} blocked mined at{' '}
              {timestamp.toString()}:
            </p>
            <pre>
              <code>{JSON.stringify(message, true, '  ')}</code>
            </pre>
          </div>
        )}
      </Layout>
    );
  }
}

export default withRouter(SubscriptionDemo);
