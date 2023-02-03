import React, { useEffect, useState } from 'react';
import { useMarketplaceNFTs } from '../../hooks/useMarketplaceNFTs';
import { GetWalletAddress } from '../../components/useMetaMaskWallet';
import MyNFTDetailsCard from '../../components/Library/DetailsCard';
import DetailsCardVideo from '../../components/Details/DetailsCardVideo';

import { navigate } from 'gatsby';
import axios from 'axios';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Paper, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Hero } from '../../components/Marketplace/Hero';
import VineLayout from '../../components/vineLayout';
// import { useBuyNFTContract } from '../hooks/useBuyNFTContract';
// import { useMetaMaskConnect } from '../hooks/useMetaMaskConnect';
import bg from '../../images/bg-1920-v2.jpg';
import openSea from '../../images/openSea.png';
import PassportDescription from '../../components/Profile/PassportDescription';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'solid #78adff 1px',
}));

const goBack = () => {
  navigate('/myNfts');
};

const LicenseAgreementPage = ({ contractAddress, tokenId }) => {
  const [getData, getMyNFTs, getNFTDetails, myNFTDetails] = useMarketplaceNFTs();
  const [nftData, setNftData] = useState({});
  const address = GetWalletAddress();

  useEffect(() => {
    if (address.length > 0) {
      getNFTDetails(tokenId, contractAddress, address[0]).then(data => setNftData(data));
    }
  }, [address]);

  console.log({ nftData });
  if (!nftData || !nftData.tokenAttributes) return <div> Loading </div>;
  else
    return (
      <VineLayout>
        <Box style={styles.background}>
          <Hero />
          <div onClick={goBack}>
            <ArrowBackIcon style={{ position: 'relative', top: '70' }}></ArrowBackIcon>
          </div>
          <Box marginLeft="5%" marginRight="5%">
            <PassportDescription />
          </Box>
          <Container sx={{ display: 'grid', placeItems: 'center', marginTop: '2.5rem', marginBottom: '2.5rem' }}>
            <Card
              key={nftData.tokenId}
              sx={{
                width: { xs: '100%', md: '100%' },
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row', md: 'row', xl: 'row', xl: 'row' },
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              {nftData.animationUrl ? (
                <DetailsCardVideo poster={nftData.image} src={nftData.animation_url} alt={nftData.title} />
              ) : (
                <CardMedia
                  component="img"
                  sx={{
                    height: {
                      xs: '400px',
                      sm: '550px',
                      md: '720px',
                      xl: '650px',
                    },
                    width: '100%',
                    border: '6px solid #FFF',
                    borderRadius: '20px',
                    boxShadow: '0 2px 22px #000',
                    position: 'sticky',
                  }}
                  image={nftData.image}
                  alt={nftData.title}
                />
              )}

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'left',
                  borderRadius: '20px',
                  height: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                  },
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                  },
                  marginLeft: { xs: 0, md: 0, xl: -5 },
                  marginTop: { xs: -5, sm: 'auto', md: 'auto', xl: 'auto' },
                  marginBottom: { xs: 'none', sm: 'auto', md: 'auto', xl: 'auto' },
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    component="div"
                    marginLeft={{ xs: 'none', md: '5%', xl: '10%' }}
                    fontWeight={'bold'}
                    fontFamily="Montserrat"
                    fontSize={{
                      md: 22,
                      sm: 16,
                      xs: 14,
                    }}
                    marginTop={{ xs: 6, sm: 0, md: 0, xl: 0 }}
                  >
                    {nftData.title}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    component="div"
                    gutterBottom
                    marginLeft={{ xs: 'none', md: '5%', xl: '10%' }}
                    fontWeight={'bold'}
                    fontFamily="Montserrat"
                    fontSize={{
                      md: 16,
                      sm: 12,
                      xs: 12,
                    }}
                  >
                    {' '}
                    {nftData.short_description}
                  </Typography>
                </CardContent>
                <Divider sx={styles.hr} />
                <CardContent>
                  <Grid
                    spacing={1}
                    marginTop={-2}
                    marginLeft={{ xs: -1, xl: '9%' }}
                    width={{ xs: 'none', xl: '90%' }}
                    justify="center"
                  >
                    {nftData.tokenAttributes.length > 0 ? (
                      <>
                        {nftData.tokenAttributes.map(item => {
                          const { trait_type, value } = item;
                          {
                            if (['Tier', 'Cup', 'Hat', 'Background', 'Body Color', 'Hand'].includes(trait_type))
                              return (
                                item && (
                                  <Box>
                                    <Typography component="div" sx={styles.properties}>
                                      {trait_type}: {value}
                                    </Typography>
                                  </Box>
                                )
                              );
                          }
                        })}
                        <Divider sx={styles.hr1} />

                        {nftData.tokenAttributes.map(item => {
                          const { trait_type, value } = item;
                          {
                            if (
                              [
                                'Presale Access',
                                'Private Discord',
                                'Giveaways & Airdrops',
                                'Non-Commercial Merchandise',
                                'Reviewer Status',
                              ].includes(trait_type)
                            )
                              return (
                                item && (
                                  <Box>
                                    <Typography component="div" sx={styles.properties}>
                                      {trait_type}: {value}
                                    </Typography>
                                  </Box>
                                )
                              );
                          }
                        })}
                      </>
                    ) : (
                      <Grid item xs={12}>
                        <Typography sx={styles.properties}>No Properties Found.</Typography>
                      </Grid>
                    )}
                  </Grid>
                  <Divider sx={styles.hr1} />
                  <Grid
                    container
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    marginLeft={{ xs: 0, xl: 3 }}
                    marginTop={-5}
                  >
                    <Grid item xs={6} spacing="1" alignItems="center" marginTop={5}>
                      <Typography variant="body2" component="div" sx={styles.text}>
                        Contract Address
                      </Typography>
                    </Grid>
                    <Grid item xs={6} marginTop={6}>
                      <Typography component="div" sx={styles.text} marginRight={{ xs: 0, md: 2 }}>
                        {nftData.contractAddress}
                      </Typography>
                    </Grid>

                    <Grid item xs={6} spacing="1" alignItems="center">
                      <Typography variant="body2" component="div" sx={styles.text}>
                        Token ID
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography component="div" sx={styles.text} marginRight={{ xs: 0, md: 2 }}>
                        {nftData.tokenId}
                      </Typography>
                    </Grid>

                    <Grid item xs={6} spacing="1" alignItems="center">
                      <Typography component="div" sx={styles.text}>
                        External URL
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography component="div" sx={styles.text} marginRight={{ xs: 0, md: 2 }}>
                        <Link href={nftData.external_url} underline="none">
                          DVLPNFT
                        </Link>
                      </Typography>
                    </Grid>

                    {nftData.title === 'THE STUFF MYSTERY BOX' ? (
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
                      nftData.lic_agr && (
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
                                href={nftData.lic_agr}
                                underline="none"
                                target="_blank"
                              >
                                OPEN
                              </Link>
                            </Typography>
                          </Grid>
                        </>
                      )
                    )}
                  </Grid>
                  <Divider sx={styles.hr2} />
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
                    sx={{
                      fontSize: {
                        md: 20,
                        sm: 15,
                        xs: 11,
                      },
                    }}
                  ></Typography>

                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    /* href={`https://testnets.opensea.io/assets/${nftData.contractAddress}/${nftData.tokenId}`} */
                    href={`https://opensea.io/assets/${nftData.contractAddress}/${nftData.tokenId}`}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: 10,
                      fontWeight: 'bold',
                      fontFamily: 'Montserrat',
                    }}
                  >
                    View on OpenSea
                  </Link>
                </CardActions>
              </Box>
            </Card>
          </Container>
        </Box>
      </VineLayout>
    );
};
const styles = {
  background: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    height: '100%',
    overflow: 'hidden',
  },

  text: {
    fontSize: {
      xl: 14,
      lg: 14,
      md: 14,
      xs: 11,
    },
    marginLeft: { xs: 0, md: '11%' },
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  properties: {
    fontSize: {
      md: 14,
      xs: 12,
    },
    marginLeft: { xs: 1, md: 4, xl: 0.5 },
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textAlign: 'left',
    marginTop: 1,
  },

  hr: {
    margin: { xs: '12px', md: 'auto 40px' },
    marginLeft: { xs: 2, md: 5, xl: 9 },
  },
  hr1: {
    margin: { xs: 'none', md: 'auto 25px' },
    marginTop: { xs: 1, md: 2 },
    marginLeft: { xs: 0, md: 3, xl: 7 },
  },
  hr2: {
    margin: { xs: 'none', md: 'auto 25px' },
    marginTop: { xs: 1, md: 2 },
    marginLeft: { xs: 0, md: 3, xl: 7 },
  },
};

export default LicenseAgreementPage;
