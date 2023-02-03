import Client from 'shopify-buy';

import React, { useEffect, useState } from 'react';

import { graphql } from 'gatsby';

import { useMarketplaceNFTs } from '../../../hooks/useMarketplaceNFTs';
import NFTDetailsPage from '../../../views/nft-view';

const client = Client.buildClient({
  domain: 'vine-spike.myshopify.com',
  storefrontAccessToken: '2e20469dd02595ca3bcf3717e9ca7794',
});

function NFTDetails(props) {
  const { nft } = props.data; // TO BE UPDATED
  const { seller, tokenId } = nft;

  const [getData] = useMarketplaceNFTs();
  const [nftData, setNftData] = useState({});

  useEffect(() => {
    getData().then(data => {
      const nftData =
        data.length === 0
          ? {}
          : data.filter(item => {
              if (typeof item !== 'undefined') return tokenId === item.tokenId && seller === item.seller;
            })[0];

      client.product.fetchAll().then(res => {
        let temp = res.filter(product => nftData.tokenId + '' === product.title)[0];
        if (temp) {
          nftData.weiPrice = temp.attrs.variants[0].price;
          console.log(nftData);
          setNftData(nftData);
        }
      });
    });
  }, [seller, tokenId]);

  return <NFTDetailsPage nft={nftData} />;
}

export default NFTDetails;

export const query = graphql`
  query ($id: String!) {
    nft(id: { eq: $id }) {
      id
      name
      image
      price
      seller
      title
      tokenId
    }
  }
`;
