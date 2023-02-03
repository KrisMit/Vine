import React from 'react';

import { Avatar } from '@mui/material';

import { GetWalletAddress } from '../useMetaMaskWallet';

const UserImage = () => {
  const address = GetWalletAddress();
  return address.length > 0 ? (
    <Avatar
      alt="Remy Sharp"
      src="https://i.postimg.cc/6q5q2cLV/user.png"
      sx={{ width: 100, height: 100, padding: '2', border: '3px solid #FFF' }}
    />
  ) : (
    <div></div>
  );
};

export default UserImage;
