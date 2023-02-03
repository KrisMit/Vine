import React, { useEffect, useState } from 'react';

import {
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

export const DetailsCardDescription = ({ short_description }) => (
  <Grid spacing={0}>
    <Typography
      component="div"
      gutterBottom
      marginLeft={{ xs: 4, sm: 2, md: 2, xl: 3 }}
      marginRight={{ xs: 4, sm: 2, md: 2, xl: 3 }}
      fontWeight={'bold'}
      fontFamily="Montserrat"
      fontSize={{
        xl: 15,
        md: 14,
        sm: 13,
        xs: 12,
      }}
    >
      {' '}
      {short_description}
    </Typography>
  </Grid>
);
