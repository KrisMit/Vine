import React from 'react';

import Box from '@mui/material/Box';

import Seo from '../components/seo';
import VineLayout from '../components/vineLayout';

const HomePage = () => {
  return (
    <>
      <VineLayout>
        <Seo title="DVLPNFT Powered by Vine Digital - home" />
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            height: 100,
            backgroundColor: 'rgb(9,74,120)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 0.5,
          }}
        >
          <h1 style={{ color: 'white' }}>Home</h1>
        </Box>
        <div>Home page</div>
      </VineLayout>
    </>
  );
};

export default HomePage;
