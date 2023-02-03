import React, { useEffect, useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import ServiceClient from '../../services/serviceClient';
import { GetWalletAddress } from '../useMetaMaskWallet';

const UserNetwork = () => {
  const address = GetWalletAddress();
  const [wallet, setWallet] = useState([]);
  const [webUser, setWebUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await ServiceClient.get(`/meta-wallets?populate=*`).catch(err => console.log(err));
      if (response && response.data && response.status === 200) {
        setWebUser(response.data.data);
        setWallet(
          response.data.data.map(user => {
            return user.attributes.wallet_address;
          })
        );
      }
    };
    fetchData();
  }, []);

  const currentAddress = wallet.filter(item => item == address);

  const user = webUser.filter(user => {
    return user.attributes.wallet_address == address;
  });

  const newUser = user.map(item => {
    return item.attributes.web_user;
  });

  return (
    <>
      {String(currentAddress).toLowerCase() == String(address).toLowerCase() &&
        newUser.map((item, index) => {
          return (
            item && (
              <Typography key={index} variant="ul" style={styles.listStyle}>
                <Typography variant="li" style={styles.li}>
                  Name: {item.data.attributes.name && item.data.attributes.name}
                </Typography>
                <Typography variant="li" style={styles.li}>
                  Email: {item.data.attributes.email && item.data.attributes.email}
                </Typography>
                <Typography variant="li" style={styles.li}>
                  Phone: {item.data.attributes.phone && item.data.attributes.phone}
                </Typography>
              </Typography>
            )
          );
        })}
    </>
  );
};

export default UserNetwork;

const styles = {
  listStyle: {
    listStyle: 'none',
    display: 'grid',
    // gap: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
    gap: '1.8rem',
    marginTop: '2rem',
  },
  button: {
    outline: 'none',
    borderRadius: '5px',
    border: '1px solid #e0e0e0',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#022649',
    color: '#fff',
    cursor: 'pointer',
  },
  li: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: { xs: 14, md: 16 },
    fontWeight: '300',
  },
  bold: {
    fontWeight: 'bold',
  },
};
