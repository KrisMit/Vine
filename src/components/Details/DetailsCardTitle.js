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

export const DetailsCardTitle = ({ title }) => (
  <CardContent>
    <Typography
      gutterBottom
      component="div"
      textAlign={'center'}
      fontWeight={'bold'}
      fontFamily="Montserrat"
      fontSize={{
        xl: 22,
        md: 20,
        sm: 18,
        xs: 16,
      }}
      marginTop={{ xs: 6, sm: 6, md: 6, xl: 2 }}
    >
      {title}
    </Typography>
  </CardContent>
);
