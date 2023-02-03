import React, { useEffect, useState } from 'react';

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import { useBuyNFTContract } from '../../hooks/useBuyNFTContract';
import { useMetaMaskConnect } from '../../hooks/useMetaMaskConnect';

function MysteryBox({ description, image, price, title, image_alt, setSelectedCollection }) {
  const [connect, state, isDisabled, accounts] = useMetaMaskConnect();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {}, [hidden]);

  const handleBuy = e => {
    if (state === 'Connect') connect();
    // buy();
    setHidden(true);
  };
  return (
    <Card
      hidden={hidden}
      sx={{
        height: '400px',
        width: { xs: '100%', md: '420px' },
        borderRadius: 2,
        border: '1px solid #e0e0e0',
        boxShadow: '0 1px 12px #74CFFE',
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="235"
          image={image.replace('ipfs://', 'https://ipfs.io/ipfs/')}
          sx={{
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
        />
        <CardContent sx={{ padding: 1.0 }}>
          <Typography sx={{ textAlign: 'center' }} gutterBottom variant="body1" fontWeight={500}>
            {title}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            border: '0.2px solid #e0e0e0',
            boxShadow: '2px 3px 10px rgba(0, 0, 0, 0.2)',
            marginTop: { xs: 9, md: 8 },
          }}
        >
          <Typography variant="body2" color="text.primary">
            Price: ${price}
          </Typography>
          <Button
            // onClick={handleBuy}
            sx={{ marginLeft: 'auto' }}
            size="small"
            color="primary"
            variant="contained"
            disableRipple={true}
          >
            Buy
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default MysteryBox;
