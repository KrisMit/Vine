import React, { useEffect, useState } from 'react';
import Client from 'shopify-buy';
import { Box, Container, Typography } from '@mui/material';

import { Hero } from '../../components/Marketplace/Hero';
import NFTList from '../../components/Marketplace/NFTList';
import ConnectMetaMaskButton from '../../components/Onboard/ConnectMetaMaskButton';
import Modal from '../../components/Profile/Modal';
import Loader from '../../components/loader';
import Seo from '../../components/seo';
import { GetWalletAddress } from '../../components/useMetaMaskWallet';
import VineLayout from '../../components/vineLayout';
import { useMarketplaceNFTs } from '../../hooks/useMarketplaceNFTs';
import bg from '../../images/bg-1920-v2.jpg';
import ServiceClient from '../../services/serviceClient';

const client = Client.buildClient({
  domain: 'vine-spike.myshopify.com',
  storefrontAccessToken: '2e20469dd02595ca3bcf3717e9ca7794',
});

const MarketplacePage = () => {
  const [selectedCollection, setSelectedCollection] = useState('');
  const [open, setOpen] = useState(false);
  const [getData] = useMarketplaceNFTs();
  const [items, setItems] = useState([]);
  const address = GetWalletAddress();
  const [shopifyData, setShopifyData] = useState([]);
  const [wallet, setWallet] = useState([]);
  const [webUser, setWebUser] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [configParam, setConfigParam] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await ServiceClient.get(`/meta-wallets?populate=*`).catch(err => console.log(err));
      if (response && response.data && response.status === 200) {
        setWebUser(response.data.data);
        setWallet(
          response.data.data.map(user => {
            return user.attributes.wallet_address;
          })
        );
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await ServiceClient.get(`/config-params?filters[param_name]=switch`).catch(err =>
        console.log(err)
      );
      if (response && response.data && response.status === 200) {
        setConfigParam(response.data.data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (String(currentAddress).toLowerCase() == String(address).toLowerCase() && newUser.length <= 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);

  const currentAddress = wallet.filter(item => String(item).toLowerCase() == String(address).toLowerCase());

  const user = webUser.filter(user => {
    return user.attributes.wallet_address == address; // filter if the user is the current user by address
  });
  const configParamValue = configParam.map(config => {
    return config.attributes.param_value; // set config param value
  });

  const configParamName = configParam.map(config => {
    return config.attributes.param_name; // set config param name
  });

  const newUser = user.map(item => {
    return item.attributes.web_user; // get the current user's data
  });

  useEffect(() => {
    getData().then(data => {
      client.product.fetchAll().then(res => {
        console.log(res);
        let temparr = [];
        data.forEach(item => {
          if (item) {
            let temp = res.filter(product => item.tokenId + '' === product.title)[0];
            if (temp) {
              item.weiPrice = temp.variants[0].price;
            }
            temparr.push(item);
          }
        });
        setItems(temparr);
        console.log(temparr);
        setLoaded(true);
      });
    });
  }, []);

  return (
    <VineLayout>
      <Seo title="DVLPNFT Powered by Vine Digital - marketplace" />
      <Box style={styles.background}>
        <Hero open={open} setOpen={setOpen} selectedCollection={selectedCollection} />
        {/* if config value is not 0 and the paramater name is switch than it means that presale is open and it will go through the onboarding logic, if not marketplace will render without any checks. */}
        {configParamValue == '1' ? (
          <Container maxWidth="xl">
            {!loaded ? (
              <Loader loaded={loaded} />
            ) : address.length <= 0 ? (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                }}
              >
                <Typography
                  sx={{
                    color: '#fff',
                  }}
                  variant="h5"
                >
                  You need to connect your wallet to see the marketplace
                </Typography>
                <ConnectMetaMaskButton />
              </Box>
            ) : String(currentAddress).toLowerCase() == String(address).toLowerCase() && newUser.length <= 0 ? (
              <>
                <NFTList items={items} setItems={setItems} />
                <Modal open={open} handleClose={handleClose} />
              </>
            ) : currentAddress.length > 0 && newUser.length > 0 ? (
              <>
                <NFTList items={items} setItems={setItems} />
              </>
            ) : (
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                  color: '#fff',
                }}
                variant="h2"
              >
                Please come back on June 23rd for THE STUFF!
              </Typography>
            )}
          </Container>
        ) : // if value is 2 that means that marketplace is restricted
        configParamValue == '2' ? (
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              color: '#fff',
            }}
            variant="h2"
          >
            Marketplace is unavailable come back later
          </Typography>
        ) : // else it will load marketplace without checks
        !loaded ? (
          <Loader loaded={loaded} />
        ) : (
          <Container maxWidth="xl">
            <NFTList items={items} setItems={setItems} />
          </Container>
        )}
      </Box>
    </VineLayout>
  );
};

export default MarketplacePage;

const styles = {
  background: {
    backgroundImage: `url(${bg})`,
    backgroundColor: 'rgb(0, 8, 45, 0.3)',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    maxWidth: '100%',
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
    paddingTop: 20,
  },

  innerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginRight: '0.1rem',
    marginTop: 60,
    // width: '100%',
  },

  button: {
    backgroundColor: 'rgb(0, 8, 45)',
    width: 100,
    color: 'white',
    marginTop: 10,
    marginLeft: 42,
    borderRadius: 20,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
    height: 30,
    elevation: 0,
  },

  text: {
    color: 'rgb(0, 8, 45)',
    marginTop: 15,
    display: 'flex',
  },

  backButton: {
    position: 'relative',
    color: 'white',
    fontSize: 38,
    top: '4rem',
    '&:hover': {
      cursor: 'pointer',
      color: 'red',
    },
  },

  nft: {
    color: 'rgb(0, 8, 45)',
    marginTop: 1,
    marginBottom: 1,
    // display: "flex",
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    fontSize: 19,
    // width: 60,
    // height: 25,
    // marginLeft: 2,
    fontWeight: 'bold',
  },

  hidden: {
    display: 'none',
  },

  price: {
    color: 'rgb(0, 8, 45)',
    marginTop: 1,
    marginBottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 65,
    fontWeight: '400',
  },
};
