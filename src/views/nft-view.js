import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

import { Link, navigate } from 'gatsby';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Card, CardActionArea, CardActions, CardContent, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DetailsCardAttribute } from '../components/Details/DetailsCardAttribute';
import { DetailsCardDescription } from '../components/Details/DetailsCardDescription';
import { DetailsCardImage } from '../components/Details/DetailsCardImage';
import { DetailsCardTitle } from '../components/Details/DetailsCardTitle';
import { DetailsCardVideo } from '../components/Details/DetailsCardVideo';
import { BuyButton } from '../components/Marketplace/BuyButton';
import { Hero } from '../components/Marketplace/Hero';
import { useBuyNFTContract } from '../hooks/useBuyNFTContract';
import { useMetaMaskConnect } from '../hooks/useMetaMaskConnect';
import Swal from 'sweetalert2';
import bg from '../images/bg-1920-v2.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'solid #78adff 1px',
}));

const goBack = () => {
  navigate('/marketplace');
};

const CardContainer = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        borderRadius: '20px',
        height: { xs: '100%' },
        width: { xs: '100%' },
        marginTop: { xs: -5, sm: -5, md: -5, xl: 'auto' },
        marginBottom: { xs: 'none', sm: 'auto', md: 'auto', xl: 'auto' },
        backgroundColor: 'white',
        borderRadius: 10,
      }}
    >
      {children}
    </Box>
  );
};

const Details = ({ nft, price }) => {
  const [buy] = useBuyNFTContract(nft);

  const [connect, state, isDisabled, accounts] = useMetaMaskConnect();
  const [hidden, setHidden] = useState(false);

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


  useEffect(() => {}, [nft]);

  const { lic_agr, image, animationUrl, title, weiPrice, short_description, tokenAttributes = [] } = nft;
  console.log(lic_agr);

  return (
    <>
      <>
        <Hero />
      </>
      <Box style={styles.background}>
        <div onClick={goBack}>
          <ArrowBackIcon
            sx={{
              color: '#fff',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          ></ArrowBackIcon>
        </div>
        <Container
          sx={{
            display: 'grid',
            placeItems: 'center',
            marginTop: '2.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <Card
            sx={{
              width: { xs: '100%', sd: '40%', md: '75%', xl: '100%' },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'column', xl: 'row' },
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            {animationUrl ? (
              <>
                <DetailsCardVideo poster={image} src={animationUrl} title={title} />
              </>
            ) : (
              <DetailsCardImage image={image} title={title} />
            )}

            <CardContainer>
              <CardContent>
                <DetailsCardTitle title={title} />
                <DetailsCardDescription short_description={short_description} />
                <Divider sx={styles.hr} />
                <DetailsCardAttribute tokenAttributes={tokenAttributes} />
                <Divider sx={styles.hr} />
                <CardDetails nft={nft} />
                <Divider sx={styles.hr} />
              </CardContent>
              <CardActions
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end!important',
                }}
              >
                <Typography
                  variant="body2"
                  marginLeft="5"
                  fontWeight={'bold'}
                  fontSize="20!important"
                  fontFamily="Montserrat"
                  marginBottom={2}
                  sx={{
                    fontSize: {
                      md: 20,
                      sm: 15,
                      xs: 11,
                    },
                  }}
                >
                  <Icon icon="mdi:ethereum" />
                  {price}
                </Typography>

                <DetailsBuyButton handleBuy={handleBuy} />
              </CardActions>
            </CardContainer>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Details;

const DetailsBuyButton = ({ handleBuy }) => {
  return (
    <BuyButton onClick={handleBuy} sx={{ width: { xs: 150, sm: 180, md: 200 }, height: { xs: 30, sm: 40, md: 50 } }}>
      {'Buy Now '}
    </BuyButton>
  );
};

const CardDetails = ({ nft }) => {
  let lic_agr = '';
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      marginLeft={{ xs: 4, sm: 2, md: 2, xl: 3 }}
      marginTop={-5}
    >
      <Grid item xs={6} spacing="1" alignItems="center" marginTop={5}>
        <Typography variant="body2" component="div" sx={styles.text}>
          Contract Address
        </Typography>
      </Grid>
      <Grid item xs={6} marginTop={6}>
        <Typography component="div" sx={styles.text}>
          {nft.contractAddress}
        </Typography>
      </Grid>

      <Grid item xs={6} spacing="1" alignItems="center">
        <Typography variant="body2" component="div" sx={styles.text}>
          Token ID
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="div" sx={styles.text}>
          {nft.tokenId}
        </Typography>
      </Grid>

      <Grid item xs={6} spacing="1" alignItems="center">
        <Typography component="div" sx={styles.text}>
          External URL
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="div" sx={styles.text}>
          <Link style={{ textDecoration: 'none' }} href={nft.external_url} underline="none">
            DVLPNFT
          </Link>
        </Typography>
      </Grid>

      {nft.title === 'THE STUFF MYSTERY BOX' ? (
        <>
          <Grid item xs={6} spacing="1" alignItems="center">
            <Typography component="div" sx={styles.text}>
              License Agreement
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="div" sx={styles.text} marginRight={{ xs: 0, md: 2 }}>
              <Link
                style={{ cursor: 'pointer' }}
                href={'https://gateway.pinata.cloud/ipfs/QmUgxMx35D5ijEc2o9yjuqvw1BYjBwiANE7eVNvLE32KB7'}
                underline="none"
                target="_blank"
              >
                OPEN
              </Link>
            </Typography>
          </Grid>
        </>
      ) : (
        nft.lic_agr && (
          <>
            <Grid item xs={6} spacing="1" alignItems="center">
              <Typography component="div" sx={styles.text}>
                License Agreement
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="div" sx={styles.text} marginRight={{ xs: 0, md: 2 }}>
                <Link style={{ cursor: 'pointer' }} href={nft.lic_agr} underline="none" target="_blank">
                  OPEN
                </Link>
              </Typography>
            </Grid>
          </>
        )
      )}
    </Grid>
  );
};

const styles = {
  text: {
    fontSize: {
      xl: 14,
      lg: 14,
      md: 12,
      xs: 11,
    },
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },

  hr: {
    margin: { xs: 'none', md: 'auto 25px' },
    marginTop: { xs: 1, md: 2 },
    marginLeft: { xs: 4, sm: 2, md: 3, xl: 3 },
    marginRight: { xs: 4, sm: 2, md: 2, xl: 3 },
  },
  background: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    height: '100%',
    padding: '8%',
  },
};
