import React, { useEffect, useState } from 'react';

import { Box, Container, Grid, Typography } from '@mui/material';

import Loader from '../../components/loader';
import ServiceClient from '../../services/serviceClient';
import ConnectMetaMaskButton from '../Onboard/ConnectMetaMaskButton';
import Form from '../Onboard/Form';
import { GetWalletAddress } from '../useMetaMaskWallet';
import Modal from './Modal';
import UserImage from './UserImage';
import UserInfo from './UserInfo';
import UserNetwork from './UserNetwork';

const UserProfile = () => {
  const address = GetWalletAddress();
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await ServiceClient.get(`/meta-wallets`).catch(err => console.log(err));
      if (response && response.data && response.status === 200) {
        setUser(
          response.data.data.map(user => {
            return user.attributes.wallet_address;
          })
        );
        setTimeout(() => {
          setLoaded(true);
        }, 1000);
      }
    };
    fetchData();
  }, []);

  const currentAddress = user.filter(item => item == address);

  useEffect(() => {
    if (address.length > 0 && String(currentAddress).toLowerCase() != String(address).toLowerCase() && loaded) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [address.length > 0 && String(currentAddress).toLowerCase() != String(address).toLowerCase() && loaded]);

  return (
    <Container style={styles.background} maxWidth="xl" sx={{ marginTop: '5rem' }}>
      {!loaded ? (
        <Loader loaded={loaded} />
      ) : !address.length > 0 ? (
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
            You need to connect your wallet to see the profile page
          </Typography>
          <ConnectMetaMaskButton />
        </Box>
      ) : (
        <Grid
          item
          md={12}
          xs={12}
          sx={{ display: 'flex', placeItems: 'left', flexDirection: { xs: 'column', md: 'row' } }}
        >
          <UserImage />
          <Box
            sx={{ display: 'flex', placeItems: 'left', marginLeft: { xs: 'none', md: '2%' }, flexDirection: 'column' }}
          >
            <UserInfo />
            <UserNetwork />
            <Modal open={open} handleClose={handleClose} />
          </Box>
        </Grid>
      )}
    </Container>
  );
};

export default UserProfile;
const styles = {
  background: {
    // backgroundColor: '#1B404B',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    maxWidth: '100%',
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
    paddingTop: 20,
  },
};
