import React, { useEffect, useState } from 'react';

import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import { Divider } from '@mui/material';

export const DetailsCardAttribute = ({ tokenAttributes }) => (
  <Grid spacing={0} sx={styles.grid}>
    {tokenAttributes.length > 0 ? (
      <>
        {tokenAttributes.map(item => {
          const { trait_type, value } = item;
          {
            if (['Tier', 'Cup', 'Hat', 'Background', 'Body Color', 'Hand'].includes(trait_type))
              return (
                item && (
                  <Box>
                    <Typography component="div" sx={styles.properties}>
                      {trait_type}: {value}
                    </Typography>
                  </Box>
                )
              );
          }
        })}
        <Divider sx={styles.hr1} />

        {tokenAttributes.map(item => {
          const { trait_type, value } = item;
          {
            if (
              [
                'Presale Access',
                'Private Discord',
                'Giveaways & Airdrops',
                'Non-Commercial Merchandise',
                'Reviewer Status',
              ].includes(trait_type)
            )
              return (
                item && (
                  <Box>
                    <Typography component="div" sx={styles.properties}>
                      {trait_type}: {value}
                    </Typography>
                  </Box>
                )
              );
          }
        })}
      </>
    ) : (
      <Grid item xs={12}>
        <Typography sx={styles.properties}>No Properties Found.</Typography>
      </Grid>
    )}
  </Grid>
);
const styles = {
  properties: {
    fontSize: {
      md: 14,
      xs: 12,
    },
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textAlign: 'left',
    marginTop: 1,
  },

  grid: {
    marginLeft: { xs: 4, sm: 2, md: 2, xl: 3 },
    marginRight: { xs: 4, sm: 2, md: 2, xl: 3 },
    justifyContent: 'center',
  },
};
