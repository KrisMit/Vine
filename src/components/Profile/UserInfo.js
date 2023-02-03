import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { GetWalletAddress } from '../useMetaMaskWallet';

const UserInfo = () => {
  const address = GetWalletAddress();
  return (
    <Grid
      sx={{
        mt: '1rem',
      }}
    >
      <Typography variant="h6" color="#fff">
        {address}
      </Typography>
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: '1.8rem',
          marginTop: '1rem',
          textAlign: 'center',
          color: '#fff',
        }}
      ></Box>
    </Grid>
  );
};

export default UserInfo;
