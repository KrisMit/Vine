import MetaMaskOnboarding from '@metamask/onboarding';

import React from 'react';

import { Button } from '@mui/material';

const SIGN_IN = 'Sign in';
const connect = 'Link MetaMask Wallet';
const connected = 'Link MetaMask Wallet';

export function Onboarding() {
  const [buttonText, setButtonText] = React.useState(SIGN_IN);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const onboarding = React.useRef();
  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);
  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText(connected);
        setDisabled(true);
        onboarding.current.stopOnboarding();
      } else {
        setButtonText(connect);
        setDisabled(false);
      }
    }
  }, [accounts]);
  React.useEffect(() => {
    function handleNewAccounts(newAccounts) {
      setAccounts(newAccounts);
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(handleNewAccounts);
      window.ethereum.on('accountsChanged', handleNewAccounts);
      return () => {
        window.ethereum.off('accountsChanged', handleNewAccounts);
      };
    }
  }, []);
  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(newAccounts => setAccounts(newAccounts));
    } else {
      onboarding.current.stopOnboarding();
    }
  };

  return (
    <div>
      <Button disabled={isDisabled} onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
}
export default Onboarding;
