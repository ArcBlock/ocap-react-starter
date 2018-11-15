import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Web3 from 'web3';

import { dataSources, getClient } from '../../libs/ocap';

import Layout from '../../components/Layout';

import './style.css';

class SubscriptionDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: dataSources[1],
      message: null,
      signing: false,
      sending: false,
      result: null,
      errmsg: '',
    };

    this.client = getClient(this.state.dataSource.name);
  }

  componentDidMount() {
    window.addEventListener('load', async () => {
      if (window.ethereum) {
        this.web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          window.web3.currentProvider.publicConfigStore.on('update', arg => {
            console.log('publicConfigStore.change', arg);
            this.setState({ account: arg.selectedAddress });
          });
        } catch (err) {
          console.error(err);
        }
      } else if (window.web3) {
        this.web3 = new Web3(window.web3.currentProvider);
        await this.fetchAccounts();
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    });
  }

  render() {
    const { message, dataSource, signing, sending, account, errmsg } = this.state;
    const buttonText = message ? 'Send Signed Transaction' : 'Sign Transaction';

    return (
      <Layout>
        <h2>Mutation Demo: {dataSource.name.toUpperCase()}.sendRawTransaction</h2>

        <p className="alert">
          Currently OCAP only support send transactions that has been signed, to play with this
          demo, make sure <a href="https://metamask.io/">MetaMask</a> is installed.
        </p>

        <p>Currently selected account in metamask: {account}</p>

        <p>Click the following button to open MetaMask transaction signing popup.</p>

        {!!errmsg && <p className="alert">Error: {errmsg}</p>}

        <Button primary onClick={this.onClick} disabled={signing || sending}>
          {buttonText}
        </Button>

        {message && (
          <div>
            <p>Signed Message</p>
            <pre>
              <code>{message}</code>
            </pre>
          </div>
        )}
      </Layout>
    );
  }

  onClick = async e => {
    if (!this.web3) {
      return window.alert('MetaMask is not detected!');
    }

    const { message, signing, sending, account } = this.state;
    if (signing || sending) {
      return;
    }

    if (message) {
      // try sending
    } else {
      this.setState({ signing: true });
      this.web3.eth
        .signTransaction({
          from: account,
          gasPrice: '20000000000',
          gas: '21000',
          to: '0x088b479109708E7C13e5117F6C176d2b9bd11D77',
          value: '0',
          data: '',
        })
        .then(signed => {
          console.log('xxx');
          this.setState({ message: signed, signing: false });
        })
        .catch(err => {
          console.error(err);
          this.setState({ errmsg: err.message || err.toString, signing: false });
        });
    }
  };
}

export default withRouter(SubscriptionDemo);
