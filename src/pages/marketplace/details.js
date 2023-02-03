import Client from 'shopify-buy';

import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { useMarketplaceNFTs } from '../../hooks/useMarketplaceNFTs';
import NFTDetailsPage from '../../views/nft-view';
import VineLayout from '../../../src/components/vineLayout';
import bg from '../../images/bg-1920-v2.jpg';

function Details({ location }) {
  const path = location.pathname.split('/');
  let price = 0;
  if (location.state) price = location.state.price;

  console.log(price);
  const seller = path[2];
  const tokenId = path[3];

  const [getData] = useMarketplaceNFTs();
  const [nftData, setNftData] = useState({});

  useEffect(() => {
    getData().then(data => {
      let item = data.filter(item => {
        if (typeof item !== 'undefined') {
          return tokenId === item.tokenId + '';
        }
      })[0];

      setNftData(item);
    });
  }, []);

  useEffect(() => {}, [nftData]);

  return (
    <VineLayout>
      <Box style={styles.background}>
        <NFTDetailsPage nft={nftData} price={price} />
      </Box>
    </VineLayout>
  );
}

export default Details;

const styles = {
  background: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    height: '100%',
    overflow: 'hidden',
  },
};
