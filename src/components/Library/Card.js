import React, { useEffect, useState } from 'react';

import { navigate } from 'gatsby';

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import { useBuyNFTContract } from '../../hooks/useBuyNFTContract';
import { useMetaMaskConnect } from '../../hooks/useMetaMaskConnect';

function LibraryCard({ item }) {
  const [connect, state, isDisabled, accounts] = useMetaMaskConnect();
  const [buy] = useBuyNFTContract(item);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {}, [hidden]);
  console.log({ item });

  return (
    <Card
      hidden={hidden}
      sx={{
        height: { sd: '440px', md: '400px' },
        width: { xs: '100%', sd: '100%', md: 305 },
        borderRadius: 5,
        border: '5px solid #00F5FF',
        boxShadow: '0 1px 12px #00F5FF',
        '&:hover': {
          boxShadow: '0 2px 22px #00F5FF',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      style={{}}
    >
      <CardActionArea>
        <CardContent sx={{ padding: 1.2, display: 'flex', justifyContent: 'center' }}>
          <Typography gutterBottom variant="body1" fontWeight={500}>
            {item.title}
          </Typography>
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia
            style={styles.image}
            onClick={() => navigate(`/library/${item.contractAddress}/${item.tokenId}`)}
            component="img"
            height="235"
            image={item.image.replace('ipfs://', 'https://ipfs.io/ipfs/')}
            sx={{
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <Typography style={{ display: 'flex', justifyContent: 'center', marginTop: '4%', marginBottom: '4%' }}>
          {/* <a target="_blank" href={`https://testnets.opensea.io/assets/${item.contractAddress}/${item.tokenId}`}> */}
          <a target="_blank" href={`https://opensea.io/assets/${item.contractAddress}/${item.tokenId}`}>
            Find it on OpenSea{' '}
          </a>
        </Typography>
        {/* <CardActions
          sx={{
            border: '0.2px solid #e0e0e0',
            boxShadow: '2px 3px 10px rgba(0, 0, 0, 0.2)',
            marginTop: { xs: 5, sm: 5, md: 8, lg: 8 },
            height: 200,
          }}
        ></CardActions> */}
      </CardActionArea>
    </Card>
  );
}

export default LibraryCard;

const styles = {
  button: {
    boxShadow: 'none',
    textTransform: 'none',
    position: 'absolute',
    marginTop: -22,
    marginRight: '0.93%',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1.5,
    background: '#00F5FF',
    '&:hover': {
      boxShadow: '0 0 15px rgba(0, 246, 254, 0.9)',
      backgroundColor: 'rgb(0, 246, 254)',
      color: 'rgb(0, 8, 45)',
    },
    border: '1px solid #000',
    borderRadius: 15,
    width: 200,
    height: 50,
    fontFamily: 'Montserrat',
  },

  image: {
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    border: '1px solid #000',
    width: 270,
    height: 270,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
