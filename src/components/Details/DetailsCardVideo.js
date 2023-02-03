import React from 'react';
import { CardMedia } from '@mui/material';

export const DetailsCardVideo = ({ src, title, poster }) => (
  <CardMedia
    component="video"
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
    src={src}
    controls
    alt={title}
    poster={poster}
  />
);
