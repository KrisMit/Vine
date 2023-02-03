import React, { useEffect, useState } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from '@mui/material';

export const DetailsCardImage = ({ image, title }) => (
  <CardMedia
    component="img"
    sx={{
      height: {
        xs: '400px',
        sm: '550px',
        md: '720px',
        xl: '650px',
      },
      width: '100%',
      border: '6px solid #FFF',
      borderRadius: '20px',
      boxShadow: '0 2px 22px #000',
      position: 'sticky',
    }}
    image={image}
    alt={title}
  />
);
