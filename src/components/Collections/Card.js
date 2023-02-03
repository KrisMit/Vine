import * as React from 'react';

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

function CollectionCard({ description, image, price, title, image_alt, setSelectedCollection }) {
  // const color = 'white';
  return (
    <>
      <Card
        sx={{
          position: 'relative',
          borderRadius: 2,
          width: { xs: '100%', md: '420px' },
          height: '400px',
          boxShadow: '0 1px 12px #74CFFE',
          '&:hover': {
            boxShadow: '0 2px 22px #74CFFE',
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: {
              xs: '200px',
              md: '200px',
            },
          }}
          image={image.replace('ipfs://', 'https://ipfs.io/ipfs/')}
          alt={image_alt}
        />
        <CardMedia
          component="img"
          sx={{
            objectFit: {
              md: 'cover',
              xs: 'full',
            },
            position: 'absolute',
            left: {
              md: '45%',
              xs: '43%',
            },
            bottom: {
              md: '44%',
              xs: '39%',
            },
            width: '50px',
            borderRadius: '50%',
            height: {
              xs: '50px',
              md: '50px',
            },
            objectFit: 'fill',
          }}
          image={image.replace('ipfs://', 'https://ipfs.io/ipfs/')}
          alt={image_alt}
        />
        <CardActionArea onClick={() => setSelectedCollection({ description, image, price, title, image_alt })}>
          <CardContent sx={{ padding: '1.5rem', marginTop: '0.6rem', textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography variant="body2" color="text.primary">
            Price: ${price}
          </Typography>
          <Button sx={{ marginLeft: 'auto' }} size="medium" color="primary">
            See All
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CollectionCard;
