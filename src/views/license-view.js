import * as React from 'react';
import { navigate } from 'gatsby';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import VineLayout from '../components/vineLayout';

const goBack = (tokenId = '', contractAddress = '') => {
  navigate(`/marketplace/${contractAddress.toLowerCase()}/${tokenId}`);
};

const Details = ({ nft }) => {
  const {
    image,
    lic_agr = '', // @KRISTINA - Here's license agreement property
    name,
    price,
    title,
    tokenId,
    description,
    external_url,
    tokenAttributes = [],
    contractAddress,
    seller,
  } = nft;

  return (
    <VineLayout>
      <div onClick={() => goBack(tokenId, contractAddress)}>
        <ArrowBackIcon style={{ position: 'relative', top: '70' }}></ArrowBackIcon>
      </div>
      <CardActionArea>
        <CardContent sx={{ padding: 1.0 }}>
          <Typography gutterBottom variant="body1" fontWeight={500}>
            SHOW LICENSE HERE
          </Typography>
        </CardContent>
      </CardActionArea>
    </VineLayout>
  );
};

export default Details;
