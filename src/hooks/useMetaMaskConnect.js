import MetaMaskOnboarding from '@metamask/onboarding';

import { useEffect, useRef, useState } from 'react';

const SIGN_IN = 'Sign in';
const CONNECT = 'Connect';
const CONNECTED = 'Connected';

export function useMetaMaskConnect() {
  const [state, setState] = useState(SIGN_IN);
  const [isDisabled, setDisabled] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const onboarding = useRef();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setState(CONNECTED);
        setDisabled(true);
        onboarding.current.stopOnboarding();
      } else {
        setState(CONNECT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  const connect = () => {
    function handleNewAccounts(newAccounts) {
      setAccounts(newAccounts);
      localStorage.setItem('wallet', JSON.stringify(accounts[0]));
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(handleNewAccounts);
      window.ethereum.on('accountsChanged', handleNewAccounts);
      return () => {
        window.ethereum.off('accountsChanged', handleNewAccounts);
      };
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(newAccounts => {
        setAccounts(newAccounts);
      });
    } else {
      onboarding.current.stopOnboarding();
    }
  };

  return [connect, state, isDisabled, accounts];
}
