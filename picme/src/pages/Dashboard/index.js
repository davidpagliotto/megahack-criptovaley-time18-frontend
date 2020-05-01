import React, {Component} from 'react';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../../config/BlockchainConfig';

const Web3 = require('web3');
const Eth = require('web3-eth');


class Dashboard extends Component {
  componentWillMount() {
    console.log("loadBlockchain")
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    console.log("web3js version is", Web3.version)

    if (typeof window.web3 !== 'undefined') {
      console.log(window.web3);
      console.log(window.web3, window.web3.currentProvider)

      const web3 = new Web3(window.web3.currentProvider)
      const accounts = await web3.eth.getAccounts()
      console.log(accounts)
      this.setState({account: accounts[0]})
    }
  }

  constructor(props) {
    super(props)
    this.state = {account: ''}
  }

  render() {
    return (
      <div>
      <h1>Dashboard Page - web3js</h1>
      <h2>My account is: {this.state.account}</h2>
      </div>
  )}
}

export default Dashboard;
