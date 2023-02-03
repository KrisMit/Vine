import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

import React, { useState } from 'react';

export const ConnectWallet = async () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [network, setNetwork] = useState(null);
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const wallet = await signer.getAddress();
  let providerNetwork = provider.getNetwork();
  setNetwork(providerNetwork);
  setWalletAddress(wallet);
  //console.log(provider);
};
