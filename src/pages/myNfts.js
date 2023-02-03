import React from 'react';
import { useEffect, useState } from 'react';

import { Box, Container, Typography } from '@mui/material';

import UserNfts from '../components/Library/NFTList';
import ConnectMetaMaskButton from '../components/Onboard/ConnectMetaMaskButton';
import Loader from '../components/loader';
import Seo from '../components/seo';
import { GetWalletAddress } from '../components/useMetaMaskWallet';
import VineLayout from '../components/vineLayout';
import { useMarketplaceNFTs } from '../hooks/useMarketplaceNFTs';
import { useMetaMaskConnect } from '../hooks/useMetaMaskConnect';
import PassportDescription from '../components/Profile/PassportDescription';
import background from '../images/bg-1920-v2.jpg';
import ServiceClient from '../services/serviceClient';

const MyNFT = () => {
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [getData, getMyNFTs] = useMarketplaceNFTs();
  const [connect, state, isDisabled, accounts] = useMetaMaskConnect();
  const address = GetWalletAddress();

  if (state === 'Connect') connect();

  useEffect(() => {
    if (address.length > 0) {
      getData().then(marketNFTs => {
        getMyNFTs(address[0], marketNFTs).then(data => {
          setItems(data);
          setLoaded(true);
        });
      });
    }
  }, [address]);

  useEffect(() => {
    setTimeout(() => {
      address.length <= 0 ? setLoaded(true) : setLoaded(false);
    }, 5000);
  }, []);

  return (
    <>
      <VineLayout>
        <Seo title="DVLPNFT Powered by Vine Digital - Passport" />
        <Box style={styles.container}>
          <Container style={styles.background} maxWidth="xl">
            <h1 style={{ color: 'purple' }}>Passport</h1>
            <PassportDescription />
            {!loaded ? (
              <Loader loaded={loaded} />
            ) : address.length <= 0 ? (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                }}
              >
                <Typography
                  sx={{
                    color: '#fff',
                  }}
                  variant="h5"
                >
                  You need to connect your wallet to see the library
                </Typography>
                <ConnectMetaMaskButton />
              </Box>
            ) : items.length > 0 ? (
              <UserNfts items={items} setItems={setItems} />
            ) : (
              <>
                <div>
                  <p style={styles.marketplaceLink}>
                    {' '}
                    Nothing here, go to <a href="/marketplace"> Marketplace </a> to buy one!{' '}
                  </p>
                </div>
              </>
            )}
          </Container>
        </Box>
      </VineLayout>
    </>
  );
};

export default MyNFT;

const styles = {
  container: {
    background: 'linear-gradient(#00FAFF, #001830)',
    backgroundSize: 'cover',
    color: 'white',
    width: '100%',
    minHeight: '100vh',
    height: '100%',
    overflow: 'hidden',
  },
  nonft: {
    textAlign: 'center',
    color: '#001830',
    height: '100vh',
    paddingTop: '200px',
  },
};
