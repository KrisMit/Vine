import React, { useEffect, useState } from 'react';

import { Link } from 'gatsby';
import { Icon } from '@iconify/react';

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Snackbar, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import { Box } from '@mui/system';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useBuyNFTContract } from '../../hooks/useBuyNFTContract';
import { useMetaMaskConnect } from '../../hooks/useMetaMaskConnect';
import Swal from 'sweetalert2';
import './marketplace.css';

function MarketPlaceCard({ item }) {
  const [connect, state, isDisabled, accounts] = useMetaMaskConnect();
  const [buy] = useBuyNFTContract(item);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {}, [hidden]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleBuy = e => {
    if (
      typeof window.ethereum === 'undefined'
      || typeof window.web3 === 'undefined'
      || !window.web3
      || !window.ethereum
      || !window.ethereum.isMetaMask
      || !isMetaMaskConnected
    ) {
      Swal.fire({
        icon: 'error',
        title: 'MetaMask wallet is not detected!',
        text: `You must install Metamask to buy.`,
        footer: '<a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">Download Metamask</a>',
      });
      console.log('MetaMask wallet is not detected!');
    } else {
      if (state === 'Connect') connect();
      buy();
      setHidden(true);
    }
  };

  const isMetaMaskConnected = async () => {
      const { ethereum } = window;
      if (ethereum) {
          var provider = new ethers.providers.Web3Provider(ethereum);
      }
      const accounts = await provider.listAccounts();
      return accounts.length > 0;
  }


  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '310px', position: 'static', marginLeft: '6%' }}>
        <Card
          hidden={hidden}
          sx={{
            height: { sd: '100%', md: '100%' },
            width: '300px',
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
        >
          <CardActionArea>
            <CardContent
              sx={{
                padding: 1.0,
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
              }}
            >
              <Typography gutterBottom fontSize="15px" fontWeight="bold">
                {item.title}
              </Typography>
            </CardContent>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link
                to={`/marketplace/${item.seller.toLowerCase()}/${item.tokenId}`}
                state={{ price: item.weiPrice / 1000000000000000000 }}
              >
                <CardMedia
                  style={styles.image}
                  component="img"
                  height="200"
                  image={item.image.replace('ipfs://', 'https://ipfs.io/ipfs/')}
                />
              </Link>
            </div>

            <CardContent sx={{ marginLeft: 1, marginRight: 1 }}>
              <Typography gutterBottom variant="body1" fontWeight={500} display="flex" flexDirection="row">
                <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                  DVLPNFT{' '}
                </div>
                <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Icon icon="mdi:ethereum" />
                  {item.weiPrice / 1000000000000000000}
                </div>
              </Typography>
            </CardContent>
            <CardActions> </CardActions>
          </CardActionArea>
          <Snackbar
            sx={{
              '& .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root': {
                backgroundColor: '#fff',
              },
              marginTop: { xs: 5, sm: 5, md: 12, lg: 20 },
            }}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            onClose={handleClose}
            // action={action}
          />
        </Card>
        <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <Fab variant="extended" sx={styles.button} onClick={handleBuy} size="small" disableRipple={true}>
            Buy Now
          </Fab>
        </div>
      </Box>
    </div>
  );
}

export default MarketPlaceCard;

const styles = {
  button: {
    boxShadow: 'none',
    textTransform: 'none',
    marginTop: -3.5,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1.5,
    background: '#00F5FF',
    '&:hover': {
      boxShadow: '0 0 15px rgba(0, 246, 254, 1)',
      backgroundColor: 'rgb(0, 246, 254)',
      color: 'rgb(0, 8, 45)',
    },
    border: '1px solid #000',
    borderRadius: 15,
    width: 200,
    height: 50,
    fontFamily: 'Montserrat',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    objectFit: 'cover',
  },
};
