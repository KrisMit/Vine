import * as React from 'react';

import Grid from '@mui/material/Grid';

import CollectionCard from './Card';
import MysteryBox from './MysteryBox';

function Collections({ showAll, library, setSelectedCollection }) {
  return library.map(item => {
    return (
      <Grid
        key={item.tokenId}
        xs={12}
        md={6}
        lg={4}
        xl={4}
        item
        onClick={showAll}
        sx={{
          marginTop: {
            xs: '5rem',
            md: '5.5rem',
          },
          marginLeft: '3%',
          marginRight: '3%',
        }}
      >
        {item.description === 'Mystery Box' ? (
          <MysteryBox key={item.tokenId} {...item} />
        ) : (
          <CollectionCard key={item.tokenId} setSelectedCollection={setSelectedCollection} {...item} />
        )}
      </Grid>
    );
  });
}
export default Collections;
