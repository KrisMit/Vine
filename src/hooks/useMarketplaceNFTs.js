import axios from 'axios';
import { ethers } from 'ethers';
import Client from 'shopify-buy';

import { useEffect, useState } from 'react';

import DvlpCollection from '../artifacts/contracts/DvlpCollection.sol/DvlpCollection.json';
import DvlpMarketplace from '../artifacts/contracts/DvlpMarketplace.sol/DvlpMarketplace.json';
import { infuraRinkeby, marketaddress, nftaddress, openSeaAPIKey, openSeaBaseURL } from '../nftconfig';

//import VineDigitalMarketTradev3 from '../artifacts/contracts/VineDigitalMarketTradev3.sol/VineDigitalMarketTradev3.json';
//import VineDigitalNFTv3 from '../artifacts/contracts/VineDigitalNFTv3.sol/VineDigitalNFTv3.json';

const client = Client.buildClient({
  domain: 'vine-spike.myshopify.com',
  storefrontAccessToken: '2e20469dd02595ca3bcf3717e9ca7794',
});

export function useMarketplaceNFTs() {
  const [myNFTDetails, setMyNFTDetails] = useState({});
  const [myNFTs, setMyNFTs] = useState([]);
  const [shopifyData, setShopifyData] = useState([]);

  useEffect(() => {
    client.product.fetchAll().then(res => {
      setShopifyData(res);
    });
  }, []);

  const provider = new ethers.providers.JsonRpcProvider(infuraRinkeby);
  const nftContract = new ethers.Contract(nftaddress, DvlpCollection.abi, provider);
  const marketContract = new ethers.Contract(marketaddress, DvlpMarketplace.abi, provider);

  const getData = async () => {
    /* const provider = new ethers.providers.JsonRpcProvider(infuraRinkeby);
    const nftContract = new ethers.Contract(nftaddress, DvlpCollection.abi, provider);
    const marketContract = new ethers.Contract(marketaddress, DvlpMarketplace.abi, provider); */
    const data = await marketContract.fetchNFTListings(nftaddress);

    const items = await Promise.all(
      data.map(async i => {
        if (i.saleFl) {
          let tokenUri = await nftContract.uri(i.tokenId);
          //vculum 220626
          tokenUri = tokenUri.replace('ipfs://', 'https://ipfs.io/ipfs/');
          const tokenMeta = await axios.get(tokenUri);

          //let jsonData = tokenMeta;
          let jsonData = await axios.get(`https://dvlpnft-stuff.s3.amazonaws.com/${i.tokenId}.json`);
          console.log(jsonData);

          let image = tokenMeta.data.image;
          image = image.replace('ipfs://', 'https://ipfs.io/ipfs/');
          let animation_url = tokenMeta.data.animation_url;
          if (animation_url !== undefined && animation_url !== null) {
            animation_url = animation_url.replace('ipfs://', 'https://ipfs.io/ipfs/');
          }

          let tokenPrice = ethers.utils.formatUnits(i.price.toString(), 'ether');
          let license_agreement = '';
          !tokenMeta.data.license_agreement
            ? (license_agreement = 'https://gateway.pinata.cloud/ipfs/QmUgxMx35D5ijEc2o9yjuqvw1BYjBwiANE7eVNvLE32KB7')
            : (license_agreement = tokenMeta.data.license_agreement.replace('ipfs://', 'https://ipfs.io/ipfs/'));
          let tokenItem = {
            // For now
            //price: 0.033,
            price: tokenPrice,
            weiPrice: i.price,
            tokenId: i.tokenId.toNumber(),
            listingId: i.listingId.toNumber(),
            contractAddress: nftContract.address,
            seller: i.seller.toString(),
            image: image,
            animationUrl: animation_url,
            title: tokenMeta.data.title,
            name: tokenMeta.data.name,
            lic_agr: license_agreement,
            tokenAttributes: tokenMeta.data.attributes,
            description: tokenMeta.data.description,
            short_description: tokenMeta.data.short_description,
            external_url: tokenMeta.data.external_url,
            tm: tokenMeta,
          };
          return tokenItem;
        }
      })
    );
    console.log('test----------------');
    console.log(items[0]);
    return items;
  };

  const getMyNFTs = async (account = '', nfts = []) => {
    let tokenIdsParams = '';
    //let contract_addressessParams = '';
    let contract_addressessParams = '&asset_contract_addresses=' + nftaddress;
    let updatedNFTs = [];

    nfts.map(async NFT => {
      if (typeof NFT !== 'undefined') {
        // tokenIdsParams += `&token_ids=${NFT.tokenId}`;
        updatedNFTs.push(NFT);
        //contract_addressessParams += `&asset_contract_addresses=${NFT.contractAddress}`;
      }
    });

    const { data } = await axios.get(
      `${openSeaBaseURL}/assets?owner=${account}&order_direction=desc&offset=0&limit=50${tokenIdsParams}${contract_addressessParams}`,
      {
        headers: {
          'X-API-KEY': openSeaAPIKey,
        },
      }
    );

    const { assets } = data;
    if (assets.length === 0) {
      return [];
    } else {
      const mynfts = [];
      assets.map(asset => {
        let license_agreement = '';
        !asset.license_agreement
          ? (license_agreement = 'https://gateway.pinata.cloud/ipfs/QmUgxMx35D5ijEc2o9yjuqvw1BYjBwiANE7eVNvLE32KB7')
          : (license_agreement = asset.license_agreement.replace('ipfs://', 'https://ipfs.io/ipfs/'));
        mynfts.push({
          lic_agr: license_agreement,
          tokenId: parseInt(asset.token_id),
          contractAddress: asset.asset_contract.address,
          image: asset.image_original_url.replace('ipfs://', 'https://ipfs.io/ipfs/'),
          title: asset.name,
          name: asset.name,
          tokenAttributes: asset.traits,
          description: asset.creator.description,
          short_description: asset.creator.short_description,
          external_url: asset.creator.external_link,
        });
      });
      // mynfts.map(item => {
      //   axios
      //     .get(`https://dvlpnft-stuff.s3.amazonaws.com/${item.tokenId}.json`)
      //     .then(res => (item.lic_agr = res.data.license_agreement));
      // });
      console.log({ mynfts });

      setMyNFTs(mynfts);
      return mynfts;
    }
  };

  const getNFTDetails = async (token_id = '', asset_contract_address = '', owner = '') => {
    try {
      const { data } = await axios.get(
        `${openSeaBaseURL}/asset/${asset_contract_address}/${token_id}/?account_address=${owner}`,
        {
          headers: {
            'X-API-KEY': openSeaAPIKey,
          },
        }
      );
      const tokenId = parseInt(data.token_id);
      let tempData = {
        lic_agr: '',
        tokenId: parseInt(data.token_id),
        contractAddress: data.asset_contract.address,
        image: data.image_original_url,
        title: data.name,
        name: data.name,
        tokenAttributes: data.traits,
        creator: data.creator.user.username,
        external_url: data.external_link,
      };

      let tokenUri = await nftContract.uri(parseInt(data.token_id));
      tokenUri = tokenUri.replace('ipfs://', 'https://ipfs.io/ipfs/');
      const tokenMeta = await axios.get(tokenUri);

      let license_agreement = tokenMeta.data.license_agreement.replace('ipfs://', 'https://ipfs.io/ipfs/');

      //let jsonData = await axios.get(`https://dvlpnft-stuff.s3.amazonaws.com/${tokenId}.json`);
      tempData.lic_agr = license_agreement;
      return tempData;
    } catch (Error) {
      return;
    }
  };

  return [getData, getMyNFTs, getNFTDetails, myNFTDetails];
}
