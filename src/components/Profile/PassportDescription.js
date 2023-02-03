import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';

export function PassportDescription() {
  return (
    <Card
      sx={{
        height: { sd: '100%', md: '100%' },
        borderRadius: 5,
        border: '2px solid #001830',
        boxShadow: '0 1px 12px #00F5FF',
        '&:hover': {
          boxShadow: '0 2px 22px #00F5FF',
        },
        display: 'flex',
        marginBottom: 5,
        marginTop: 5,
      }}
    >
      <CardContent>
        <Typography
          fontFamily="Montserrat"
          sx={{
            fontSize: {
              md: 20,
              sm: 15,
              xs: 11,
            },
            fontWeight: 500,
          }}
        >
          Your Passport is the place where you can view all of your Vine Verified NFTs along with their metadata and
          license agreements. It will also be the place where you will receive notifications, drops, and access to the
          utilities your NFT unlocks.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PassportDescription;
