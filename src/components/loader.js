import React from 'react';

import { Box, CircularProgress } from '@mui/material';

export default function Loader({ loaded }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress style={styles.loadColor} loaded={loaded} />
    </Box>
  );
}

const styles = {
  loadColor: {
    width: '100px',
    height: '100px',
    color: '#08F4FE',
  },
};
